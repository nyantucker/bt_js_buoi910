var dsnv = []

var jsonData = localStorage.getItem("DSNV");
console.log(jsonData);
if (jsonData != null) {
    var list = JSON.parse(jsonData);
    dsnv = list.map(function(item){
        return new NhanVien(item.tk,item.hoTen,item.mail,item.matKhau,item.ngayLam,item.luongCB,item.chucVu,item.gioLam)
    });
    console.log(dsnv);
    renderDsnv(dsnv);
}



function addNV() {
    var nv = getDataForm();
    var isValid = 
    kiemTraRong("tbTKNV",nv.tk) &
    kiemTraDoDai(4,6,"tbTKNV",nv.tk) &
    kiemTraRong("tbTen",nv.hoTen) &
    kiemTraRong("tbEmail",nv.mail) &
    kiemTraRong("tbMatKhau",nv.matKhau) &
    kiemTraRong("tbNgay",nv.ngayLam) &
    kiemTraRong("tbLuongCB",nv.luongCB) &
    kiemTraRong("tbGiolam",nv.gioLam) &
    kiemTraTen("tbTen",nv.hoTen) &
    kiemTraEmail("tbEmail",nv.mail) &
    kiemTraMatKhau("tbMatKhau",nv.matKhau) &
    kiemTraLuong("tbLuongCB",nv.luongCB) &
    kiemTraChucVu("tbChucVu",nv.chucVu) &
    kiemTraGioLam("tbGiolam",nv.gioLam);
    console.log(isValid);
    if (!isValid) return;

    dsnv.push(nv);
    
    var jsonData = JSON.stringify(dsnv);
    localStorage.setItem("DSNV",jsonData);

    renderDsnv(dsnv);
}

function xoaNV(id) {
    var index = timVitri(id,dsnv);
    dsnv.splice(index,1);
    var jsonData = JSON.stringify(dsnv);
    localStorage.setItem("DSNV",jsonData);
    renderDsnv(dsnv);
}

function suaNV(id) {
    var index = timVitri(id,dsnv);
    showDataForm(dsnv[index])
    document.getElementById("tknv").disabled = true;
    document.getElementById("btnThemNV").disabled = true;
    document.getElementById("btnDong").disabled = true;
}

function updateNV() {
    var nv = getDataForm();
    var index = timVitri(nv.tk,dsnv);
    dsnv[index] = nv;
    var jsonData = JSON.stringify(dsnv);
    localStorage.setItem("DSNV",jsonData);
    renderDsnv(dsnv);
    document.getElementById("tknv").disabled = false;
    document.getElementById("btnThemNV").disabled = false;
    document.getElementById("btnDong").disabled = false;
    $("#myModal").modal("hide")
    reset()
}


function search(xepLoai) {
    var list = [] 
    for (var i = 0; i < dsnv.length; i++) {
        if (dsnv[i].xepLoai() == xepLoai) {
            list.push(dsnv[i])
        }
    }
    renderDsnv(list)
}