function NhanVien (_tk,_hoTen,_mail,_matKhau,_ngayLam,_luongCB,_chucVu,_gioLam) {
    this.tk=_tk;
    this.hoTen=_hoTen;
    this.mail=_mail;
    this.matKhau=_matKhau;
    this.ngayLam=_ngayLam;
    this.luongCB=_luongCB;
    this.chucVu=_chucVu;
    this.gioLam=_gioLam;
    this.tongLuong = function () {
        var luong = 0
        if (this.chucVu == "Sếp") {
            luong = this.luongCB * 3
        } else if (this.chucVu == "Trưởng phòng") {
            luong = this.luongCB * 2
        } else if (this.chucVu == "Nhân viên") {
            luong = this.luongCB * 1
        }
        return luong;
    };
    this.xepLoai = function () {
        var content=``;
        if (this.gioLam >= 192) {
            content = `Xuất sắc`;
        } else if (this.gioLam >= 176) {
            content = `Giỏi`;
        } else if (this.gioLam >= 160) {
            content = `Khá`;
        } else if (this.gioLam < 160) {
            content = `Trung bình`;
        } 
        return content;
    };
}


function getDataForm() {
    var _tk = document.getElementById("tknv").value;
    var _hoTen = document.getElementById("name").value;
    var _mail = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngayLam = document.getElementById("datepicker").value;
    var _luongCB = document.getElementById("luongCB").value*1;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value*1;
    var nv = new NhanVien (_tk,_hoTen,_mail,_matKhau,_ngayLam,_luongCB,_chucVu,_gioLam);
    return nv
}

function renderDsnv(dsnv) {
    var contentHTML =``;
    for (var i = 0; i < dsnv.length; i++) {
        var nv = dsnv[i]
        var contentTr = 
        `<tr>
            <td>${nv.tk}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.mail}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong().toLocaleString()}</td>
            <td>${nv.xepLoai()}</td>
            <td><button class="btn btn-info" onclick="suaNV('${nv.tk}')">Sửa</button><button class="btn btn-warning" onclick="xoaNV('${nv.tk}')">Xóa</button></td>
        </tr>`
        contentHTML = contentHTML + contentTr;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function timVitri(id,dsnv) {
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].tk == id) {
            return i
        }
    }
    
}

function showDataForm(nv) {
    $("#myModal").modal("show")
    document.getElementById("tknv").value = nv.tk
    document.getElementById("name").value = nv.hoTen
    document.getElementById("email").value = nv.mail
    document.getElementById("password").value = nv.matKhau
    document.getElementById("datepicker").value = nv.ngayLam
    document.getElementById("luongCB").value = nv.luongCB
    document.getElementById("chucvu").value = nv.chucVu
    document.getElementById("gioLam").value = nv.gioLam
}

function reset () {
    document.getElementById("tknv").value = ``
    document.getElementById("name").value = ``
    document.getElementById("email").value = ``
    document.getElementById("password").value = ``
    document.getElementById("datepicker").value = ``
    document.getElementById("luongCB").value = ``
    document.getElementById("chucvu").value = ``
    document.getElementById("gioLam").value = ``
}

function resetPage() {
    location.reload()
}