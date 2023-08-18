function kiemTraRong (idErr,value) {
    if (value.length == 0) {
        document.getElementById(idErr).innerText = `Không được để trống`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

function kiemTraTen (idErr,value) {
    const re = /[A-Za-z]/
    if (re.test(value)) {
        document.getElementById(idErr).innerText = ""
        return true;
    } else {
        document.getElementById(idErr).innerText = `Tên không hợp lệ`
        document.getElementById(idErr).style.display = `block`
        return false
    }
}

function kiemTraDoDai (min,max,idErr,value) {
    var length = value.trim().length
    if (length<min||length>max)
    {
        document.getElementById(idErr).innerText = `Nội dung phải từ ${min} đến ${max} kí tự`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function kiemTraEmail (idErr,value) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(value)) {
        document.getElementById(idErr).innerText = ""
        return true;
    } else {
        document.getElementById(idErr).innerText = `Email không hợp lệ`
        document.getElementById(idErr).style.display = `block`
        return false
    }
}

function kiemTraMatKhau (idErr,value) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/
    if (re.test(value)) {
        document.getElementById(idErr).innerText = ""
        return true;
    } else {
        document.getElementById(idErr).innerText = `Mật khẩu phải chứa 6-10 chữ số, ít nhất 1 ký tự in hoa, số, đặc biệt `
        document.getElementById(idErr).style.display = `block`
        return false
    }
}

function kiemTraLuong (idErr,value) {
    if(value < 1000000 || value > 20000000) {
        document.getElementById(idErr).innerText = `Lương không hợp lệ`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

function kiemTraChucVu (idErr,value) {
    if(value == `Chọn chức vụ`) {
        document.getElementById(idErr).innerText = `Vui lòng chọn chức vụ`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}

function kiemTraGioLam (idErr,value) {
    if(value < 80 || value > 200) {
        document.getElementById(idErr).innerText = `Giờ làm không hợp lệ`
        document.getElementById(idErr).style.display = `block`
        return false
    } else {
        document.getElementById(idErr).innerText = ``
        return true
    }
}