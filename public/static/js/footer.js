$(function () {
    $('#nb_invite_ok').click(function () {
        $("#nb_invite_wrap").click();
    })
    $('#zixun_img').click(function () {
        $("#nb_invite_wrap").click();
    })
    $('#zhengcezixun').click(function () {
        $("#nb_invite_wrap").click();
    })
    $('.Friendship_link').hover(function () {
        $('.shouye_text1').css('display', 'block');
    }, function () {
        $('.shouye_text1').css('display', 'none');
    })

    //点击返回顶部
    $('#backtop').click(function () {
        $({ top: $(window).scrollTop() }).animate(
         { top: 0 },
         {
             duration: 700,
             step: function () {
                 $(window).scrollTop(this.top);
             }
         }
     );
    })
    //侧栏
    $(".cebian_Box li").hover(function () {
        $(this).children(".cebian_Image1").show();
    }, function () {
        //$(this).children(".cebian_Image1").hide();
    })
    $(".cebian_Box li").eq(0).hover(function () {
        $(this).children().children("img").attr("src", "/images/www/icon (1).png")
    }, function () {
        $(this).children().children("img").attr("src", "/images/www/simal_logo_05.png")
        $(this).children(".cebian_Image1").hide();
    })
    $(".cebian_Box li").eq(1).hover(function () {

        $(this).children().children("img").attr("src", "/images/www/icon (6).png")
    }, function () {
        $(this).children().children("img").attr("src", "/images/www/simal_logo_08.png")
        $(this).children(".cebian_Image1").hide();
    })
    $(".cebian_Box li").eq(2).hover(function () {
        $(this).children().children("img").attr("src", "/images/www/icon (7).png");
    }, function () {
        $(this).children().children("img").attr("src", "/images/www/simal_logo_17.png");
        $(this).children(".cebian_Image1").hide();
    })
    $(".cebian_Box li").eq(3).hover(function () {
        $(this).children().children("img").attr("src", "/images/www/icon (3).png")
    }, function () {
        $(this).children().children("img").attr("src", "/images/www/simal_logo_16.png")
        $(this).children(".cebian_Image1").hide();
    })
    $(".cebian_Box li").eq(4).hover(function () {
        $(this).children().children("img").attr("src", "/images/www/ZXGT_icon_Green.png")
    }, function () {
        $(this).children().children("img").attr("src", "/images/www/ZXGT_icon.png")
        $(this).children(".cebian_Image1").hide();
    })
    $(".cebian_Box li").eq(5).hover(function () {
        $(this).children().children("img").attr("src", "/images/www/icon (2).png")
    }, function () {
        $(this).children().children("img").attr("src", "/images/www/end_03.png");
    })
    loadGg();
    setInterval(LoadDjs, 1000);


$.getJSON("/ajax/GetCityByIP.ashx", { dt: new Date().getTime() }, function (data) {
    if (data.code == 0) {
        if (data.region == data.city) {
            $("#span_city").text(data.city);
        } else {
            $("#span_city").text(data.region + '-' + data.city);
        }
    } else {
        $("#span_city").text("北京市");
    }
});





})


//意见反馈
function Feedback() {
    var txtContents = document.getElementById("txttextarea").value;
    var txtLinkUs = document.getElementById("txtContact").value;
    if (txtContents == "") {
        document.getElementById("txtFeedback").innerHTML = "请填写反馈内容";
        document.getElementById("txtFeedback").style.color = "#F00";
        return false;
    } else if (txtContents.length > 200) {
        document.getElementById("txtFeedback").innerHTML = "反馈内容不能大于200字符";
        document.getElementById("txtFeedback").style.color = "#F00";
        return false;
    } else if (txtLinkUs == "") {
        document.getElementById("txtFeedback").innerHTML = "联系电话或邮箱不能为空";
        document.getElementById("txtFeedback").style.color = "#F00";
    } else if (txtLinkUs.length > 50) {
        document.getElementById("txtFeedback").innerHTML = "联系电话或邮箱不能大于50字符";
        document.getElementById("txtFeedback").style.color = "#F00";
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





function loadGg() {
    $.ajax({
        url: "/ajax/GetDaojishi.ashx",
        type: "get",
        dataType: "json",
        cache: false,
        async: false,
        data: { Pid: 1, Cid: 1 },
        success: function (data) {
            if (data.result == "1") {
                $("#hidDjsTime").val(data.djsTime);
                $("#ggtitle").attr("href", data.GgUrl).text(data.GgTitle);
            }
        }
    });
}
function LoadDjs() {
    var city = "北京";
    var cookie_val = getCookie("MRRB_PCCOOKIE");
    if (cookie_val != null && cookie_val != "") {
        var strs = cookie_val.split('&');
        var citys = strs[1].split('=');
        city = citys[1];
    }
    var NowTime = new Date();
    var EndTime = new Date($("#hidDjsTime").val());
    var t = EndTime.getTime() - NowTime.getTime();
    var monthName = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二");
    $("#monthHzName").text("北京" + monthName[NowTime.getMonth()] + "月份");
    if (t <= 0) {
        $("#djsT").text("-");
        $("#djsTime").text("-时-分-秒");
    } else {
        var d = Math.floor(t / 1000 / 60 / 60 / 24);
        var h = Math.floor(t / 1000 / 60 / 60 % 24);
        var m = Math.floor(t / 1000 / 60 % 60);
        var s = Math.floor(t / 1000 % 60);
        $("#djsT").text(d);
        $("#djsTime").text(h + "时" + m + "分" + s + "秒");
    }
}
