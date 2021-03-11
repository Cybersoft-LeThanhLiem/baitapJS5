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

/**
 * Bài 2: Tính tiền điện
 */

const f50 = 500;
const n50 = 650;
const n100 = 850;
const n150 = 1100;
const r = 1300;

document.getElementById("btnTinhTien").onclick = function () {
    var amount = parseInt(document.getElementById("kW").value);
    var thanhTien;
    if (amount > 0 && amount <= 50) {
        thanhTien = amount * f50;
    } else if (amount > 50 && amount <= 100) {
        thanhTien = 50 * f50 + (amount - 50) * n50;
    } else if (amount > 100 && amount <= 200) {
        thanhTien = 50 * f50 + 50 * n50 + (amount - 100) * n100;
    } else if (amount > 200 && amount <= 350) {
        thanhTien = 50 * f50 + 50 * n50 + 100 * n100 + (amount - 200) * n150;
    } else if (amount > 350) {
        thanhTien = 50 * f50 + 50 * n50 + 100 * n100 + 150 * n150 + (amount - 350) * r;
    } else {
        alert("Dữ liệu không hợp lệ");
        return;
    }

    document.getElementById("thanhTien").innerHTML = new Intl.NumberFormat().format(thanhTien) + " VNĐ";
}