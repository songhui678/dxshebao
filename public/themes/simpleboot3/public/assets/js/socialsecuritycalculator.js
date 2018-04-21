var gettimes = new Date().getTime();
$(function () {
    //GetProvinceList();  //privince list
    //GetCity(1);
    //GetHkxz(1, 1);
    //GetHouseId(1, 1);
    //GetBaseRange(1, 1, 2, '2015-09-01', 1);
    $(".jisuan").live("click", function () {
        var pid = $("#provincelist a.actived").attr('attrid');
        var cid = $("#citylist a.actived").attr('attrid');
        var hkxz = $("#ulHkxz li.select").attr("data-id");
        var sbBase = $("#txtSbBaseNum").val();
        var gjjBase = $("#txtGjjBaseNum").val();
        var houseId = $("#hidHousingId").val();
        if (pid > 0 && cid > 0 && hkxz > 0 && sbBase > 0) {
            var gjjClass = $("#divIsGjj").attr("class");
            var isGjj = 1;
            if (gjjClass == "panduan_text") {
                isGjj = 0;
                gjjBase = 0;
                houseId = 0;
            }
            submits(pid, cid, '', '', hkxz, sbBase, isGjj, gjjBase, houseId);
        }
    });
    chongzhi(); //重置
    $(".chongzhi").click(function () {
        chongzhi();
    });
    //计算器选择城市//
    $("#provincelist").text("");
    $(".select_box").click(function () {
        $(".select_city").show();
        if ($("#provincelist").text() == "") {
            GetProvinceList();
        }
    })
    $("#provincelist a").live("click", function () {
        $(".select_city").show();
        $("#provincelist a").removeClass("actived");
        $(this).addClass('actived');
        $("#tag_province").removeClass("current_1").addClass("current_2");
        $("#tag_city").removeClass("current_2").addClass("current_1");
        $("#txtCity").val($(this).attr('title'));
        GetCity($(this).attr("attrid"));
    });
    $("#citylist a").live("click", function () {
        $("#citylist a").removeClass("actived");
        $(this).addClass('actived');
        $("#txtCity").val($("#provincelist a.actived").attr('title') + ' ' + $(this).attr('title'));
        $(".select_city").hide();
        var pid = $("#provincelist a.actived").attr('attrid');
        var cid = $("#citylist a.actived").attr('attrid');
        GetHkxz(pid, cid);
    });
    $("#tag_province").click(function () {
        $("#tag_province").removeClass("current_2").addClass("current_1");
        $("#tag_city").removeClass("current_1").addClass("current_2");
        $(".select_city_con_actived").show();
        $(".select_city_con_actived1").hide();
    });

    $("#tag_city").click(function () {
        $("#tag_province").removeClass("current_1").addClass("current_2");
        $("#tag_city").removeClass("current_2").addClass("current_1");
        $(".select_city_con_actived").hide();
        $(".select_city_con_actived1").show();
    });

    $(".household").click(function () {
        var pid = $("#provincelist a.actived").attr('attrid');
        var cid = $("#citylist a.actived").attr('attrid');
        if (pid > 0 && cid > 0) {
            $(".select_household").show();
        }
    })

    $("#ulHkxz li").live("click", function () {
        $(this).css("cursor", "pointer");
        $("#ulHkxz li").removeClass("select");
        $(this).addClass("select");
        $("#txtHkxz").val($(this).text());
        $("#ulHkxz").hide();
        var pid = $("#provincelist a.actived").attr('attrid');
        var cid = $("#citylist a.actived").attr('attrid');
        GetBaseRange(pid, cid, 1, '', 0);
    });

    $("#divIsGjj").click(function () {
        if ($(this).attr("class") == "panduan_text") {
            $(this).attr("class", "panduan_textck");
            $(".jsq_list3").show();
            var pid = $("#provincelist a.actived").attr('attrid');
            var cid = $("#citylist a.actived").attr('attrid');
            GetHouseId(pid, cid);
        } else {
            $(this).attr("class", "panduan_text");
            $(".jsq_list3").hide();
        }
    });
})

function chongzhi() {
    $("#txtCity").val('选择城市');
    $("#txtHkxz").val('请选择');
    $("#txtSbBaseNum").val('');
    $("#txtGjjBaseNum").val('');
    $("#txtHouseP").val('');
    $("#txtHouseE").val('');
    $(".jsq_list3").hide();
    $("#divIsGjj").attr("class", "panduan_text");
    $("#provincelist a").removeClass("actived");
    $("#citylist").html("");
    $("#ulHkxz li").removeClass("select");
}

function GetProvinceList() {
    $.getJSON("/ajax/SocialSecurityCalculator.ashx?t=" + gettimes, { Action: "province" }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                var proStr = "";
                $.each(data.list, function (n, value) {
                    proStr += "<a title=\"" + value._name + "\" attrid=\"" + value._id + "\" href=\"javascript:;\">" + value._name + "</a>";
                });
                $("#provincelist").html(proStr);
            }
        }
    });
}
//huoqu city list
function GetCity(pid) {
    $.getJSON("/ajax/SocialSecurityCalculator.ashx?t=" + gettimes, { Action: "city", Pid: pid }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                var cyStr = "";
                $.each(data.list, function (n, value) {
                    cyStr += '<a title="' + value._cityname + '" attrid=\"' + value._id + '\" href="javascript:;"' + (data.list.length == 1 ? ' class="actived"' : '') + '>' + value._cityname + '</a>';
                });
                $("#citylist").html(cyStr);
                $(".select_city_con_actived").hide();
                $(".select_city_con_actived1").show();
                if (data.list.length == 1) {
                    $("#txtCity").val($("#provincelist a.actived").attr('title') + ' ' + $("#citylist a").attr('title'));
                    $(".select_city").hide();
                    var pid = $("#provincelist a.actived").attr('attrid');
                    var cid = $("#citylist a.actived").attr('attrid');
                    GetHkxz(pid, cid);
                    GetBaseRange(pid, cid, 1, '', 0);
                    if ($("#divIsGjj").attr("class") == "panduan_textck") {
                        $(".jsq_list3").show();
                        GetHouseId(pid, cid);
                    }
                }
            }
        }
    });
}

//huoqu hkxz list
function GetHkxz(pid, cid) {
    $.getJSON("/ajax/SocialSecurityCalculator.ashx?t=" + gettimes, { Action: "hjxz", Pid: pid, Cid: cid }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                var hkxzStr = "";
                $.each(data.list, function (n, value) {
                    if (n == 0) {
                        $("#txtHkxz").val(value._name);
                    }
                    hkxzStr += '<li data-id="' + value._id + '"' + (n == 0 ? ' class="select"' : '') + '>' + value._name + '</li>';
                });
                $("#ulHkxz").html(hkxzStr);
            }
        }
    });
}

//huoqu houseid list
function GetHouseId(pid, cid) {
    $.getJSON("/ajax/SocialSecurityCalculator.ashx?t=" + gettimes, { Action: "housep", Pid: pid, Cid: cid }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                $.each(data.list, function (n, value) {
                    if (n == 0) {
                        $("#hidHousingId").val(value._id);
                        $("#txtHouseP").val(value._personalproportion + '%');
                        $("#txtHouseE").val(value._enterpriseproportion + '%');
                        GetBaseRange(pid, cid, 2, '', value._id);
                    }
                });
            }
        }
    });
}
//baserange
function GetBaseRange(pid, cid, proType, startDate, housingId) {
    $.getJSON("/ajax/SocialSecurityCalculator.ashx?t=" + gettimes, { Action: "baserange", Pid: pid, Cid: cid, BXType: proType, StartDate: startDate, HousingId: housingId }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                if (proType == 1) {
                    $("#div_baserange").text('基数范围' + data.minlimit + '到' + data.maxlimit);
                    $("#txtSbBaseNum").val(data.minlimit);

                } else if (proType == 2) {
                    $("#div_gjjbaserange").text('基数范围' + data.minlimit + '到' + data.maxlimit);
                    $("#txtGjjBaseNum").val(data.minlimit);
                }
            }
        }
    });
}

function submits(pid, cid, startDate, endDate, perTypeId, sbBaseNum, isGjj, gjjBaseNum, houseId) {
    $.ajax({
        url: "/ajax/SocialSecurityCalculator.ashx",
        type: "get",
        dataType: "json",
        cache: false,
        data: {
            t: gettimes, Action: "submits", Pid: pid, Cid: cid, StartDate: startDate, EndDate: endDate, PerTypeId: perTypeId, SbBaseNum: sbBaseNum, IsGjj: isGjj, GjjBaseNum: gjjBaseNum, HouseId: houseId
        },
        beforeSend: function () {

        },
        success: function (data) {
            if (data.errorcode > 0) {
                alert(data.errormsg);
            } else {
                if (data.result == "1") {
                    var gr = 0;
                    var qy = 0;
                    var total = 0;
                    var tableStr = '<table cellpadding="0" cellspacing="0"><tr class="tr1"><td class="td1" style="color:#323232" rowspan="2">缴纳项目</td><td class="td2" style="color:#323232" rowspan="2">社保基数</td><td class="td3" style="color:#323232" colspan="2">个人缴纳</td><td class="td4" style="color:#323232" colspan="2">企业缴纳</td></tr><tr class="tr2"><td style="color:#323232">缴纳比例</td><td style="color:#323232">缴纳金额（元）</td><td style="color:#323232">缴纳比例</td><td style="color:#323232">缴纳金额（元）</td></tr></table>';
                    var table = $(tableStr);
                    $.each(data.SocialSecurityAndHouse.SocialSecurityList, function (n, value) {
                        if (value.YanglaoB > 0) {
                            table.append("<tr><td>养老保险</td><td>" + value.YanglaoB + "</td><td>" + value.YanglaoPP + "%</td><td>" + value.YanglaoMP + "</td><td>" + value.YanglaoPE + "%</td><td>" + value.YanglaoME + "</td></tr>");
                        }
                        if (value.ShiyeB > 0) {
                            table.append("<tr><td>失业保险</td><td>" + value.ShiyeB + "</td><td>" + value.ShiyePP + "%</td><td>" + value.ShiyeMP + "</td><td>" + value.ShiyePE + "%</td><td>" + value.ShiyeME + "</td></tr>");
                        }
                        if (value.GongshangB > 0) {
                            table.append("<tr><td>工伤保险</td><td>" + value.GongshangB + "</td><td>" + value.GongshangPP + "%</td><td>" + value.GongshangMP + "</td><td>" + value.GongshangPE + "%</td><td>" + value.GongshangME + "</td></tr>");
                        }
                        if (value.ShengyuB > 0) {
                            table.append("<tr><td>生育保险</td><td>" + value.ShengyuB + "</td><td>" + value.ShengyuPP + "%</td><td>" + value.ShengyuMP + "</td><td>" + value.ShengyuPE + "%</td><td>" + value.ShengyuME + "</td></tr>");
                        }
                        if (value.YiliaoB > 0) {
                            table.append("<tr><td>医疗保险</td><td>" + value.YiliaoB + "</td><td>" + value.YiliaoPP + "%</td><td>" + value.YiliaoMP + '+' + value.LargePE + "</td><td>" + value.YiliaoPE + "%</td><td>" + value.YiliaoME + '+' + value.LargeME + "</td></tr>");
                        }
                        gr += value.YanglaoMP + value.ShiyeMP + value.GongshangMP + value.ShengyuMP + value.YiliaoMP + value.LargePE;
                        qy += value.YanglaoME + value.ShiyeME + value.GongshangME + value.ShengyuME + value.YiliaoME + value.LargeME;
                        total += value.TotalMonthPrice;
                    });
                    if (data.SocialSecurityAndHouse.HouseList != null) {
                        $.each(data.SocialSecurityAndHouse.HouseList, function (n, value) {
                            if (value.HouseB > 0) {
                                table.append("<tr><td>公积金</td><td>" + value.HouseB + "</td><td>" + value.HousePP + "%</td><td>" + value.HouseMP + "</td><td>" + value.HousePE + "%</td><td>" + value.HouseME + "</td></tr>");
                            }
                            gr += value.HouseMP;
                            qy += value.HouseME;
                            total += value.TotalMonthPrice;
                        });
                    }
                    table.append('<tr><td>&nbsp;</td><td>&nbsp;</td><td>个人共缴纳：</td><td style="font-size:16px; color:#33a429">' + gr.toFixed(2) + '</td><td >企业共缴纳：</td><td style="font-size:16px; color:#33a429">' + qy.toFixed(2) + '</td></tr>');
                    table.append('<tr><td class="tdlast" colspan="6"><div class="total_num" style="font-size:18px; color:#33a429">' + total.toFixed(2) + '</div><div class="sum" style="font-size:16px">总缴纳：</div></td></tr>');
                    $("#shebaoDetail").html(table);
                }
            }
        }
    });
}