/**
 * Bài 1: Quản lý tuyển sinh
 */

document.getElementById("btnMark").onclick = function () {
    var toan = Number(document.getElementById("toan").value);
    var ly = Number(document.getElementById("ly").value);
    var hoa = Number(document.getElementById("hoa").value);

    var area = parseFloat(document.getElementById("area").value);
    var entity = parseFloat(document.getElementById("entity").value);
    var standard = document.getElementById("standard").value;
    var total = toan + ly + hoa + area + entity;
    var result = "";

    var resultP = document.getElementById("result");

    if (total >= standard) {
        result = "Đậu";
        resultP.classList.add('alert-success');
        resultP.classList.remove('alert-danger');
    } else {
        result = "Rớt";
        resultP.classList.add('alert-danger');
        resultP.classList.remove('alert-success');
    }

    document.getElementById("totalMark").innerHTML = total;
    resultP.innerHTML = result;
}