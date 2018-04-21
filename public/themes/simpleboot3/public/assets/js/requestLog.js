$(function () {
    addLog();

});
function getIp(fun) {
    var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
    $.getJSON(url, fun);
}
function addLog(host) {
    getIp(function (data) {
        $.getJSON("/utils/RequestLogManager.ashx?t=" + Date.parse(new Date()), { Action: "request", Url: window.location.href, Host: data.Ip }, function (data) {

        });
    });

}
function paySuccess(orderNo) {
    getIp(function (data) {
        $.getJSON("/utils/RequestLogManager.ashx?t=" + Date.parse(new Date()), { Action: "paySuccess", OrderNo: orderNo, Host: data.Ip }, function (data) {

        });
    });

}