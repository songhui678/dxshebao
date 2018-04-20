$(function () {
    //loadJsj(1, 1, 4);
    loadKhjz(1);
    $(".rrb1_yuan div").mouseover(function () {
        $(".rrb1_yuan1").removeClass("rrb1_yuan2");
        $(this).addClass("rrb1_yuan2");
        //sxx 07.21s
      
        //sxx 07.21e
        var productId = $(this).attr("v");
        //loadJsj(1, 1, productId);
    });
    $(".qiehuan_R").click(function () {
        var page = parseInt($("#currentPage").text());
        var totalPage = parseInt($("#totalPage").text());
        if (page < totalPage) {
            loadKhjz(page + 1);
        }
    });
    $(".qiehuan_L").click(function () {
        var page = parseInt($("#currentPage").text());
        if (page > 1) {
            loadKhjz(page - 1);
        }
    });
    $(".youshi3").hover(function () {
        $(".youshi2 img").attr("src", "/images/www/sss (2).png")
        $(".youshi3 img").attr("src", "/images/www/sss (4).png")
        $(".youshi").removeClass("youshi1");
        $(this).addClass("youshi1");
    }, function () {
        $(".youshi2 img").attr("src", "/images/www/sss (3).png")
        $(".youshi3 img").attr("src", "/images/www/sss (6).png")
        $(this).removeClass("youshi1");
        $(".youshi2").addClass("youshi1");
    })
    $(".youshi4").hover(function () {
        $(".youshi2 img").attr("src", "/images/www/sss (2).png")
        $(".youshi4 img").attr("src", "/images/www/sss (1).png")
        $(".youshi").removeClass("youshi1");
        $(this).addClass("youshi1");
    }, function () {
        $(".youshi4 img").attr("src", "/images/www/sss (5).png")
        $(".youshi2 img").attr("src", "/images/www/sss (3).png")
        $(this).removeClass("youshi1");
        $(".youshi2").addClass("youshi1");
    })
})
function loadKhjz(page) {
    $.ajax({
        url: "/ajax/PingjiaShowHandler.ashx",
        type: "get",
        dataType: "html",
        data: { PageSize: 8, CurrentPage: page },
        beforeSend: function (data) {
        },
        success: function (data) {
            var dt = data.split("###");
            $("#totalPage").text(dt[1]);
            $("#currentPage").text(page);
            $("#khjz").html(dt[0]);
            hkjz();
        }
    });
}
function hkjz() {
    $("#div_khjz").hover(function () {
    }, function () {
        $(".kehu").hide();
    });
    $(".jianzheng").hover(function () {
        var n = $(".jianzheng").index(this);
        var id = $(this).attr("data-value");
        $("#h4_Name").html($("#hidName" + id).val());
        $("#hidContent").html($("#hidContent" + id).val());
        $("#hidTime").html($("#hidTime" + id).val());
        $("#p_proType").html($("#hidProType" + id).val());
        var startCount = parseInt($("#hidStartCount" + id).val());
        $("#divpjstart").html("");
        for (var i = 1; i <= 5; i++) {
            if (i <= startCount) {
                $("#divpjstart").append("<img src=\"/images/www/eee_03.png\">");
            } else {
                $("#divpjstart").append("<img src=\"/images/www/eee_05.png\">");
            }
        }
        $(".kehu").show();
        if (n == 2) {
            $(".kehu").css({
                'left': 160,
                'top': 50
            })
            $(".kehu").removeClass("kehu2 kehu3");
            $(".kehu").addClass("kehu1")
        }
        else {
            if (n == 3) {
                $(".kehu").css("left", 230 + 160); $(".kehu").removeClass("kehu2 kehu3"); $(".kehu").addClass("kehu1");
            }
            else {
                if (n == 4) {
                    $(".kehu").css({
                        'left': 160,
                        'top': 120 + 'px'
                    })
                    $(".kehu").removeClass("kehu1 kehu3");
                    $(".kehu").addClass("kehu2")
                } else {
                    if (n == 5) {
                        $(".kehu").css({
                            'left': 230 + 160,
                            'top': 120 + 'px'
                        })
                        $(".kehu").removeClass("kehu1 kehu3");
                        $(".kehu").addClass("kehu2")
                    } else {
                        if (n == 6) {
                            $(".kehu").css({
                                'left': 160,
                                'top': 120 + 'px'
                            })
                            $(".kehu").removeClass("kehu2 kehu1");
                            $(".kehu").addClass("kehu3")
                        } else {
                            if (n == 7) {
                                $(".kehu").css({
                                    'left': 390,
                                    'top': 120 + 'px'
                                })
                                $(".kehu").removeClass("kehu2 kehu1");
                                $(".kehu").addClass("kehu3")
                            } else {
                                $(".kehu").css({
                                    "left": 230 * n + 160,
                                    'top': 50
                                })
                            }
                        }
                    }
                }
            }
        }
    }, function () {

    })

    //判断是PC还是移动登录自动跳转
    var test = window.location.search;
   
    var browser = {
        versions: function () {
            var u = navigator.userAgent,
            app = navigator.appVersion;
            return {
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
                iPhone: u.indexOf("iPhone") > -1,
                iPad: u.indexOf("iPad") > -1
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };

    //SmartPhone   
    if (browser.versions.mobile) {
        // 移动端链接地址  
        location.href = "https://m.rrb365.com"+test;
    }


    var s, s2, s3, timer;
    function init() {
        s = getid("div1");
        s2 = getid("div2");
        s3 = getid("div3");
        s3.innerHTML = s2.innerHTML;
        timer = setInterval(mar, 30)
    }
    function mar() {
        if (s2.offsetWidth <= s.scrollLeft) {
            s.scrollLeft -= s2.offsetWidth;
        } else { s.scrollLeft++; }
    }
    function stopscroll() {
        clearTimeout(timer)
    }
    function getid(id) {
        return document.getElementById(id);
    }
    $(function () {
        //鼠标放上去 付费项目  小三角跟着移动
        $('.rrb1_yuan1').mouseover(function () {
            var index11 = $('.rrb1_yuan1').index(this);
            if (index11 == 0) {
                $('.jiamu-sanjiao').stop().animate({ left: '+85px' }, 200);
                $('.rrb1_kuang_m').css('display', 'none')
                $('.rrb1_kuang_m').eq(0).css('display', 'block')
            } else if (index11 == 1) {
                $('.jiamu-sanjiao').stop().animate({ left: '+330px' }, 200);
                $('.rrb1_kuang_m').css('display', 'none')
                $('.rrb1_kuang_m').eq(1).css('display', 'block')
            } else if (index11 == 2) {
                $('.jiamu-sanjiao').stop().animate({ left: '+565px' }, 200);
                $('.rrb1_kuang_m').css('display', 'none')
                $('.rrb1_kuang_m').eq(2).css('display', 'block')
            } else {
                $('.jiamu-sanjiao').stop().animate({ left: '+810px' }, 200);
                $('.rrb1_kuang_m').css('display', 'none')
                $('.rrb1_kuang_m').eq(3).css('display', 'block')
            }
        })
        //媒体报道鼠标放上去停止滚动
        init();
        $('#div1').hover(function () {
            stopscroll();
        }, function () {
            init();
        })
        //底部文章列表
        $('.tab1 ul.menu li').hover(function () {
            //获得当前被点击的元素索引值
            var Index = $(this).index();

            var line = 156 * Index - 156;
            //给菜单添加选择样式
            $(this).addClass('active').siblings().removeClass('active');
            $('.tab1').find(".line").stop(true, true).animate({ left: line }, 200);

            //显示对应的div
            $('.tab1').children('.lists').eq(Index - 1).show().siblings('.lists').hide();

        });
        $('.tab2 ul.menu li').hover(function () {
            //获得当前被点击的元素索引值
            var Index = $(this).index();
            var line = 156 * Index - 156;
            //给菜单添加选择样式
            $(this).addClass('active').siblings().removeClass('active');
            $('.tab2').find(".line").stop(true, true).animate({ left: line }, 200);

            //显示对应的div
            $('.tab2').children('.lists').eq(Index - 1).show().siblings('.lists').hide();

        })
    })



    $.ajax({
        async: false,
        url: "/ajax/LinksHandler.ashx",
        type: "get",
        data: { Action: "ImagesUrlList" },
        success: function (data) {
            if (data == "no") {
                $("#div2").html("获取失败");
            } else {
                $("#div2").html(data);
            }
        }
    });

  


    setTimeout(function () {
        $(".shouhoutell img:last").animate({ width: '0px' }, "slow");
        setTimeout(function () {
            $(".shouhou_span img").show();
        }, 800)
    }, 5000)
    $(".shouhou_span img").click(function () {
        $(".shouhoutell img:last").animate({ width: '100%' }, "slow");
        $(".shouhou_span img").hide();
    });
    $(".shouhoutell img:last").click(function () {
        $(".shouhoutell img:last").animate({ width: '0' }, "slow");
        setTimeout(function () {
            $(".shouhou_span img").show();
        }, 800)
    });

    setTimeout(function () {
        $(".slide_botm").animate({ width: '0px' }, "slow");
        $(".yellow_btn").show();
    }, 5000)
    $(".closed_btn").click(function () {
        $(".slide_botm").animate({ width: '0px' }, "slow");
        $(".yellow_btn").show();

    });
    $(".yellow_btn").click(function () {
        $(".slide_botm").animate({ width: '100%' }, "slow");
        $(".yellow_btn").hide();
    });


    //上传简历
    $("#btnUpLoad").click(function () {
        var temp = $("#loginInfo a:first-child").html();
        if (temp != "登录") {
            showDiv();
        } else {
            window.location = "/login";
        }
    });

    //业务覆盖全国点击出现在线咨询
    $('.city_Box .area_con li').click(function () {
        $("#nb_invite_wrap").click();
    });

    //三大保障点击出现在线咨询
    $('.youshi_Box .youshi').click(function () {
        $("#nb_invite_wrap").click();
    });

}


//意见反馈
function FeedbackIndex() {
    debugger;
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    var txtContents = document.getElementById("txttextareaContent").value;
    var txtLinkUs = document.getElementById("txtContactPhone").value;
    if (txtContents == "") {
        alert("请填写反馈内容");
        return false;
    } else if (txtContents.length > 200) {
        alert("反馈内容不能大于200字符");
        return false;
    } else if (txtLinkUs == "") {
        alert("联系电话不能为空");
        return false;
    }
    else if (!reg.test(txtLinkUs)) {
        alert("请输入有效手机号码");
        return false;
    } else {
        $.ajax({
            url: "/ajax/TextFeedbackHandler.ashx",
            type: "get",
            data: { t: new Date().getTime(), Action: "AddFeedback", Text: txtContents, Contact: txtLinkUs },
            success: function (data) {
                if (data == "no") {
                    alert("添加失败");
                } else if (data == "no_text") {
                    alert("登陆后才能反馈");
                }
                else if (data == "ok") {
                    document.getElementById("txttextarea").value = "";
                    document.getElementById("txtContact").value = "";
                    alert("反馈成功");
                }
            }
        });
    }
}

