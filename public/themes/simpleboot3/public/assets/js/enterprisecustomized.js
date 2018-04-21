var gettimes = new Date().getTime();
function GetAllProvinceList(name) {
    $.getJSON("/ajax/ProvinceHandler.ashx?t=" + gettimes, { Action: "province", IsAll: 1 }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                var proStr = "<option value=''>请选择省份</option>";
                $.each(data.list, function (n, value) {
                    proStr += "<option value='" + value._id + "'>" + value._name + "</option>";
                });
                $("#" + name).html(proStr);
            }
        }
    });
}
function GetAllCity(pid, name) {
    $.getJSON("/ajax/ProvinceHandler.ashx?t=" + gettimes, { Action: "city", Pid: pid, IsAll: 1 }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            var cyStr = "";
            if (data.list.length != 1) {
                cyStr += "<option value=''>请选择城市</option>";
            }
            if (data.result == "1") {
                $.each(data.list, function (n, value) {
                    cyStr += "<option value='" + value._id + "'>" + value._cityname + "</option>";
                });
            }
            $("#" + name).html(cyStr);
            if (data.list.length == 1) {
                document.getElementById(name).options[0].selected = true;
            }
        }
    });
}

function GetEnterpriseInfo(id, name) {
    $.getJSON("/ajax/DictionaryHandler.ashx?t=" + gettimes, { Id: id }, function (data) {
        if (data.errorcode > 0) {
            alert(data.errormsg);
        } else {
            if (data.result == "1") {
                var proStr = "<option value=''>请选择</option>";
                $.each(data.list, function (n, value) {
                    proStr += "<option value='" + value.Code + "'>" + value.Name + "</option>";
                });
                $("#" + name).html(proStr);
            }
        }
    });
}