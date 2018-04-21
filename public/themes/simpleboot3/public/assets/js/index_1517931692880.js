$(document).ready(function () {
   
    /*-------play--start--------------*/
  
    $(".qcontainer").click(function () {
        var index = $(".qcontainer").index(this);
        if (index == 0) {
            $("#videoContent").empty();
            $("#videoContent").html("<video class=\"Video cla1\" width=\"698\" height=\"349\" autoplay> <source id=\"sou1\" src=\"/zhuanti/teaching/login.mp4\" type=\'video/mp4;\'/> <source id=\"sou2\" src=\"/zhuanti/teaching/login.webm\" type='video/webm' /> </video>");

            $(".contor1").empty();
            $(".contor1").html('<div class="play"></div><div class="progress"><div class="mask"></div><div class="progress-bar"></div><div class="progress-contor1"></div></div><div class="time">0:0</div><div style="color:white;display:inline-block;margin-top:10px;margin-left:10px;float:left;">播放速率：</div><div class="one" data-role="1">1</div><div class="one" data-role="2" style="display:none;">2</div><div class="one" data-role="3" style="display:none;">3</div><div class="full"><div class="left"></div><div class="right"></div></div><div class="volume-box"><div class="volume-bar"></div><div class="volume-control"></div></div><div class="trumpt" data-icon="sound"></div>')
            videocontral()
        }else if (index == 1) {
     
            $("#videoContent").empty();
            $("#videoContent").html("<video class=\"Video cla1\" width=\"698\" height=\"349\" autoplay> <source id=\"sou1\" src=\"/zhuanti/teaching/jshebao.mp4\" type=\'video/mp4;\'/> <source id=\"sou2\" src=\"/zhuanti/teaching/jshebao.webm\" type='video/webm' /> </video>");
        
            $(".contor1").empty();
            $(".contor1").html('<div class="play"></div><div class="progress"><div class="mask"></div><div class="progress-bar"></div><div class="progress-contor1"></div></div><div class="time">0:0</div><div style="color:white;display:inline-block;margin-top:10px;margin-left:10px;float:left;">播放速率：</div><div class="one" data-role="1">1</div><div class="one" data-role="2" style="display:none;">2</div><div class="one" data-role="3" style="display:none;">3</div><div class="full"><div class="left"></div><div class="right"></div></div><div class="volume-box"><div class="volume-bar"></div><div class="volume-control"></div></div><div class="trumpt" data-icon="sound"></div>')
            videocontral()
           
        } else if (index == 2) {
            $("#videoContent").empty();
            $("#videoContent").html("<video class=\"Video cla1\" width=\"698\" height=\"349\" autoplay> <source id=\"sou1\" src=\"/zhuanti/teaching/gjj.mp4\" type=\'video/mp4;\'/> <source id=\"sou2\" src=\"/zhuanti/teaching/gjj.webm\" type='video/webm' /> </video>");
            $(".contor1").empty();
            $(".contor1").html('<div class="play"></div><div class="progress"><div class="mask"></div><div class="progress-bar"></div><div class="progress-contor1"></div></div><div class="time">0:0</div><div style="color:white;display:inline-block;margin-top:10px;margin-left:10px;float:left;">播放速率：</div><div class="one" data-role="1">1</div><div class="one" data-role="2" style="display:none;">2</div><div class="one" data-role="3" style="display:none;">3</div><div class="full"><div class="left"></div><div class="right"></div></div><div class="volume-box"><div class="volume-bar"></div><div class="volume-control"></div></div><div class="trumpt" data-icon="sound"></div>')

            videocontral();
  
        } else if (index == 3) {
        
            $("#videoContent").empty();
            $("#videoContent").html("<video class=\"Video cla1\" width=\"698\" height=\"349\" autoplay> <source id=\"sou1\" src=\"/zhuanti/teaching/dfgz.mp4\" type=\'video/mp4;\'/> <source id=\"sou2\" src=\"/zhuanti/teaching/dfgz.webm\" type='video/webm' /> </video>");
            $(".contor1").empty();
            $(".contor1").html('<div class="play"></div><div class="progress"><div class="mask"></div><div class="progress-bar"></div><div class="progress-contor1"></div></div><div class="time">0:0</div><div style="color:white;display:inline-block;margin-top:10px;margin-left:10px;float:left;">播放速率：</div><div class="one" data-role="1">1</div><div class="one" data-role="2" style="display:none;">2</div><div class="one" data-role="3" style="display:none;">3</div><div class="full"><div class="left"></div><div class="right"></div></div><div class="volume-box"><div class="volume-bar"></div><div class="volume-control"></div></div><div class="trumpt" data-icon="sound"></div>')

            videocontral();
        } else {

            $("#videoContent").empty();
            $("#videoContent").html("<video class=\"Video cla1\" width=\"698\" height=\"349\" autoplay> <source id=\"sou1\" src=\"/zhuanti/teaching/tqtj.mp4\" type=\'video/mp4;\'/> <source id=\"sou2\" src=\"/zhuanti/teaching/tqtj.webm\" type='video/webm' /> </video>");
            $(".contor1").empty();
            $(".contor1").html('<div class="play"></div><div class="progress"><div class="mask"></div><div class="progress-bar"></div><div class="progress-contor1"></div></div><div class="time">0:0</div><div style="color:white;display:inline-block;margin-top:10px;margin-left:10px;float:left;">播放速率：</div><div class="one" data-role="1">1</div><div class="one" data-role="2" style="display:none;">2</div><div class="one" data-role="3" style="display:none;">3</div><div class="full"><div class="left"></div><div class="right"></div></div><div class="volume-box"><div class="volume-bar"></div><div class="volume-control"></div></div><div class="trumpt" data-icon="sound"></div>')
            videocontral();
        }
    })
   

    /*-------play--stop--------------*/
    /*------------------progress--start------------------*/

    function videocontral() {

        var video = $("video")[0];
        var play = $(".play");
        var Time = $(".time");
        if (video.play) {
            play.attr("class", "pause");
        } else {
            play.attr("class", "play");
        }
        play.click(function () {
            if (video.paused) {
                play.attr("class", "pause");
                video.play();
            } else {
                play.attr("class", "play");
                video.pause();
            }
        })
        video.ontimeupdate = function () {
            var bili = video.currentTime / video.duration;
            var bili2 = $(".progress").width() - $(".progress-contor1").width();
            $(".progress-bar").css({
                width: bili * 100 + "%"
            })
            $(".progress-contor1").css({
                left: bili2 * bili + "px"
            })
            Time.text("0:" + parseInt(video.currentTime));
        }
        $(".mask").click(function (e) {
            var lx = e.offsetX;
            var bili = lx / $(".progress").width();
            var bili2 = $(".progress").width() - $(".progress-contor1").width();
            $(".progress-bar").css({
                width: bili * 100 + "%"
            })
            $(".progress-contor1").css({
                left: bili2 * bili + "px"
            })
            console.log(video.duration);
            video.currentTime = video.duration * bili;

            Time.text("0:" + parseInt(video.currentTime));
        })
        var obj = drag($(".progress-contor1")[0], { dragy: false, sidex: [0, $(".progress").width() - $(".progress-contor1").width()], speed: 0 }, function (x, y) {
            var bili = (x + 10) / $(".progress").width();
            $(".progress-bar").css({
                width: bili * 100 + "%"
            })
            video.currentTime = video.duration * bili;
            Time.text("0:" + parseInt(video.currentTime));
        })

        /*-----------------progress---stop-------------------*/
        /*-------------------full----start-------------------*/
        var full = $(".full");
        full.click(function () {
            if (video.requestFullScreen) {
                video.requestFullScreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullScreen) {
                video.webkitRequestFullScreen();
            }
            // video.webkitRequestFullscreen();
            // video.mozRequestFullscreen();
        });
        /*-------------------full---stop----------------------*/
        /*-----------------sound-------------------------------*/
        var sound = $(".trumpt");
        $(".volume-bar").click(function (e) {
            var lx = e.offsetX;
            var bili = lx / $(".volume-bar").width();
            var bili2 = $(".volume-box").width() - $(".volume-control").width();
            $(".volume-bar").css({
                width: bili * 100 + "%"
            })
            $(".volume-control").css({
                left: bili2 * bili + "px"
            })
            video.volume = bili;
        });
        var obj = drag($(".volume-control")[0], { dragy: false, sidex: [0, $(".volume-box").width() - $(".volume-control").width()], speed: 0 }, function (x, y) {
            var bili = (x + 7) / $(".volume-box").width();
            $(".volume-bar").css({
                width: bili * 100 + "%"
            })
            if (x == 0) {
                video.volume = false;
                sound.attr("data-icon", "quiet");
                $(".volume-bar").css("width", 0);
                $(".volume-control").css("right", "63px");
                video.muted = true;
            } else {
                video.volume = bili;
                sound.attr("data-icon", "sound");
                $(".volume-bar").css("width", bili * 100 + "%");
                video.muted = false;
            }
        })

        sound.click(function () {
            if (video.muted) {
                sound.attr("data-icon", "sound");
                $(".volume-bar").css("width", "100%");
                $(".volume-control").css("right", 0);
                video.muted = false;
            } else {
                sound.attr("data-icon", "quiet");
                $(".volume-bar").css("width", 0);
                $(".volume-control").css("right", "63px");
                video.muted = true;
            }
        });
        /*speed*/
        $(".one").click(function () {
            if ($(this).html() == '1') {
                
                $(this).html('2')
                video.playbackRate = 2
            } else if ($(this).html() == '2') {
                $(this).html('3')
                video.playbackRate = 3
            } else {
                $(this).html('1')
                video.playbackRate = 1
            }
        })
    }




    //点击显示隐藏地图
    var flag = true;
    $(".rrb_ditu").hover(function () { $(".map_Box").css("display", "block"); }, function () { $(".map_Box").css("display", "none"); })

    //鼠标放上去显示省份
    $(".shortcut-select").hover(function () {
        $(this).children(".ss-dropdown").show();
    }, function () {
        $(this).children(".ss-dropdown").hide();
    });
    //鼠标放上去省份变色
    setTimeout(function () {
        $(".shortcut-select.shortcut-select-p .ss-dropdown a").hover(function () {
            $(this).toggleClass("changecolor");

        })
    }, 1000)

    //点击选择省份
    setTimeout(function () {
        $(".shortcut-select.shortcut-select-p .ss-dropdown a").live("click", function () {
            $(".ss-value em", $(this).parents(".shortcut-select")).attr("pid", $(this).attr("pid"));
            $(".ss-value em", $(this).parents(".shortcut-select")).html($(this).html());
            $(this).parents(".ss-dropdown").hide();
        });
    }, 1000)

    //点击显示城市
    $(".shortcut-select.shortcut-select-city .ss-dropdown a").live("click", function () {
        $(".ss-value em", $(this).parents(".shortcut-select")).attr("pinyin", $(this).attr("pinyin"));
        $(".ss-value em", $(this).parents(".shortcut-select")).html($(this).html());
        $(this).parents(".ss-dropdown").hide();
        $(".shortcut-select.shortcut-select-city").siblings(".index_city").val($(this).attr("pinyin"));
    });

    //点击确定城市改变
    $(".button").click(function () {
        $(".rrb_ditucity").text($(".ss-value .chengshi").text())
        $(".map_Box").css("display", "none")
    })
    //点击热门城市

    setTimeout(function () {
        $(".hot_city a").click(function () {
            var index = $(".hot_city a").index(this);
            $(".rrb_ditucity").text($($(".hot_city a").get(index)).text())
            $(".map_Box").css("display", "none")

            var houtCity = $(".rrb_ditucity").text();
            if (houtCity != "选择城市") {
                $.ajax({
                    url: "/ajax/getPositionHandler.ashx",
                    type: "get",
                    cache: false,
                    async: false,
                    dataType: "json",
                    data: { action: "hotCity", province: "", city: "", hotCity: houtCity, dt: new Date().getTime() },
                    success: function (data) {
                        if (data == "1") {
                            location.href = location.href;
                        } else {
                            alert("常用城市加载失败！");
                            return false;
                        }
                    }
                });
            }
            flag = true;
        })
    }, 1000)



    $(function () {
        //$.get("/ajax/mLoginInfo.ashx", { dt: new Date().getTime() }, function (data) {
        //    var temp = data.split(",");
        //    $("#loginInfo").html(temp[0]);
        //    $("#loadInfo").html(temp[1]);
        //});
        $.ajax({
            url: "/ajax/mLoginInfo.ashx",
            async: false,
            data: { dt: new Date().getTime() },
            success: function (data) {
                var temp = data.split(",");
                $("#loginInfo").html(temp[0]);
                $("#loadInfo").html(temp[1]);
            }
        });



    })


    $(".rrb1_header_R1").mouseover(function () {
        $("#divtopmobile").hide();
        $("#divtopapp").show();
    })
    $("#divtopapp").mouseout(function () {
        $("#divtopapp").hide();
    });
    $(".rrb1_header_R2").mouseover(function () {
        $("#divtopapp").hide();
        $("#divtopmobile").show();
    })
    $("#divtopmobile").mouseout(function () {
        $("#divtopmobile").hide();
    });
    //弹窗——企业定制//
    $(".inpbtn").click(function () {
        $(".popup_window").show();
        GetAllProvinceList('ddlEnProvince');
        //企业信息
        GetEnterpriseInfo('enterpriseIndustry', 'txtIndustry');
        GetEnterpriseInfo('enterpriseScale', 'txtScale');
    })
    $("#ddlEnProvince").change(function () {
        GetAllCity($(this).val(), "ddlEnCity");
    });
    $(".closebtn").click(function () {
        $(".popup_window").hide();
    })
    $("#btnSubmitsEn").click(function () {
        var name = $.trim($("#txtName").val());
        var conperson = $.trim($("#txtConPerson").val());
        var conphone = $.trim($("#txtConPhone").val());
        var pid = $("#ddlEnProvince").val();
        var cid = $("#ddlEnCity").val();
        var hangye = $("#txtIndustry").val();
        var guimo = $("#txtScale").val();
        var xuqiu = $.trim($("#txtXuqiu").val());
        if (name == "") {
            $("#li_msg").text("企业名称不能为空");
            return false;
        } else if (conperson == "") {
            $("#li_msg").text("联系人不能为空");
            return false;
        } else if (conphone == "") {
            $("#li_msg").text("联系电话不能为空");
            return false;
        } else if (pid == "") {
            $("#li_msg").text("请选择省份");
            return false;
        } else if (cid == "") {
            $("#li_msg").text("请选择城市");
            return false;
        } else if (hangye == "") {
            $("#li_msg").text("请选择所属行业");
            return false;
        } else if (guimo == "") {
            $("#li_msg").text("请选择公司规模");
            return false;
        } else if (xuqiu == "") {
            $("#li_msg").text("请填写您的需求");
            return false;
        } else if (xuqiu.length > 500) {
            $("#li_msg").text("需求的文字不能超过500字");
            return false;
        } else {
            $("#li_msg").text("");
            $.post("/ajax/EnterpriseCustomized.ashx?t=" + new Date().getTime(), { Name: name, PerName: conperson, PerPhone: conphone, Pid: pid, Cid: cid, IndId: hangye, ScaleId: guimo, Demand: xuqiu }, function (data) {
                if (data == "ok") {
                    $(".popup_window input").val("");
                    $("#txtXuqiu").val("");
                    alert("提交成功");
                    $(".popup_window").hide();
                } else if (data == "no") {
                    alert("提交失败");
                } else {
                    alert(data);
                }
            })
        }
    });
  


});



function getCookie(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度

    // 如果找到了索引，就代表cookie存在，
    // 反之，就说明不存在。
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可。
        cookie_pos += cookie_name.length + 1;      //这里容易出问题，所以请大家参考的时候自己好好研究一下
        var cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end == -1) {
            cookie_end = allcookies.length;
        }

        var value = decodeURIComponent(allcookies.substring(cookie_pos, cookie_end));         //这里就可以得到你想要的cookie的值了。。。
        // alert(value);
    }
    return value;
}

function loadMenuTop() {
    var url = location.href.toString().toLocaleLowerCase();
    if (url.indexOf("jiaoshebao") > 0) {
        $(".Nav li").eq(1).css("border-bottom", "2px solid #094");
    } else if (url.indexOf("jiaogongjijin") > 0) {
        $(".Nav li").eq(2).css("border-bottom", "2px solid #094");
    } else if (url.indexOf("shebaochangshi") > 0 || url.indexOf("news") > 0) {
        $(".Nav li").eq(3).css("border-bottom", "2px solid #094");
    } else if (url.indexOf("about") > 0) {
        $(".Nav li").eq(4).css("border-bottom", "2px solid #094");
    } else {
        $(".Nav li").eq(0).css("border-bottom", "2px solid #094");
    }
}
