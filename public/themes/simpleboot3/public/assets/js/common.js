//通过名称获取地址栏值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//显示关闭弹出窗
function showDiv(id) {
    if (id == undefined) {
        id = "popDiv";
    }
    document.getElementById(id).style.display = 'block';
    document.getElementById('popIframe').style.display = 'block';
    document.getElementById('bg').style.display = 'block'; 
    var left = ($(window).width() - $("#" + id).width()) / 2;
    var top = ($(window).height() - $("#" + id).height()) / 2;
    $("#" + id).css("left", left).css("top", top);
}
//关闭弹出窗
function closeDiv(id) {
    if (id == undefined) {
        id = "popDiv";
    }
    document.getElementById(id).style.display = 'none';
    document.getElementById('bg').style.display = 'none';
    document.getElementById('popIframe').style.display = 'none';
}

//公共加载事件
function onSubmits() {
    if ($('form').valid()) {

        $('form').submit();
    }
}
//验证两个日期大小
function checkDate() {
    var sDate = new Date(document.getElementById("btime").value.replace('//-/g', "//"));
    var eDate = new Date(document.getElementById("etime").value.replace('//-/g', "//"));
    if (sDate > eDate) {
        alert("结束日期不能小于开始日期");
        return false;
    }
    return true;
}
//获取字符长度
function getStrLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var length = val.charCodeAt(i);
        if (length >= 0 && length <= 128) {
            len += 1;
        }
        else {
            len += 2;
        }
    }
    return len;
}