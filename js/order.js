function genderChanged(obj) {
    var mixIteam = document.getElementById("check");
    var select = document.getElementById("select");
    var value = obj.value;
    if (value === 'banh1') {
        mixIteam.style.display = 'inline-block';
        select.style.background = 'white';
        return false;
    } else if (value === 'banh0') {
        select.style.background = 'orangered';
        mixIteam.style.display = 'none';
    } else {
        mixIteam.style.display = 'none';
        select.style.background = 'white';
        return false;
    }
}

function onClick() {
    var select = document.getElementById("select");
    var name = document.getElementById("name");
    var write = document.getElementById("write");
    var address = document.getElementById("myaddress");
    var date = document.getElementById("date");
    var Idate = new Date(date.value);
    var newDate = new Date();
    if (select.value === 'banh0' &&
        name.value.length < 1 &&
        write.value.length < 1 &&
        date.value < newDate &&
        address.value.length < 1) {
        name.style.background = 'orangered';
        write.style.background = 'orangered';
        date.style.background = 'orangered';
        address.style.background = 'orangered';
        alert("vui lòng nhập đủ thông tin, tên, dòng chữ viết lên, ngày thang, địa chỉ");
        return false;
    } else if (name.value.length < 1) {
        alert("tên không được để trống");
        name.style.background = 'orangered';
        return false;
    } else if (name.value.length > 100) {
        alert("tên không quá 100 ký tự");
        name.style.background = 'orangered';
        return false;
    } else if (write.value.length < 1) {
        write.style.background = 'orangered';
        alert("nội dung viết lên bánh không được để trống");
        return false;
    } else if (write.value.length > 30) {
        write.style.background = 'orangered';
        alert("nội dung viết lên bánh không quá 30 ký tự");
        return false;
    } else if (date.value.length < 1) {
        date.style.background = 'orangered';
        alert("ngày tháng năm không được bỏ trống");
        return false;
    } else if (Idate.getFullYear() < newDate.getFullYear() &&
        Idate.getMonth() <= 12 &&
        Idate.getDate() <= 31) {
        alert("không được là ngày, tháng, năm trong quá khứ");
        return false;
    } else if (Idate.getFullYear() == newDate.getFullYear() &&
        Idate.getMonth() < newDate.getMonth() &&
        Idate.getDate() < 31) {
        date.style.background = 'orangered';
        alert("không được là ngày, tháng, năm trong quá khứ");
        return false;
    } else if (Idate.getFullYear() == newDate.getFullYear() &&
        Idate.getMonth() == newDate.getMonth() &&
        Idate.getDate() < newDate.getDate()) {
        date.style.background = 'orangered';
        alert("không được là ngày, tháng, năm trong quá khứ");
        return false;
    } else if (address.value.length < 1) {
        address.style.background = 'orangered';
        alert("địa chỉ không được bỏ trống");
        return false;
    } else if (address.value.length > 500) {
        address.style.background = 'orangered';
        alert("địa chỉ không được quá 500 ký tự");
        return false;
    }
    document.getElementById("myFormOrder").style.display = 'none';
    document.getElementById("successful").style.display = 'inline-block';
    alert("tất cả điều nhập đủ và đúng yêu cầu");
    return false;
}

function genderChanged(obj) {
    var select = document.getElementById("select");
    var value = obj.value;
    if (value === 'banh1') {
        select.style.background = 'white';
        return false;
    } else if (value === 'banh0') {
        select.style.background = 'orangered';
    } else {
        select.style.background = 'white';
        return false;
    }
}

function nameInput() {
    var name = document.getElementById("name");
    if (name.value.length > 0 && name.value.length <= 100) {
        name.style.background = 'white';
        return false;
    }
}

function writeInput() {
    var write = document.getElementById("write");
    if (write.value.length > 0 && write.value.length <= 30) {
        write.style.background = 'white';
        return false;
    }
}

function dateInput() {
    var date = document.getElementById("date");
    var Idate = new Date(date.value);
    var newDate = new Date();
    if (Idate.getFullYear() == newDate.getFullYear()) {
        if (Idate.getMonth() == newDate.getMonth() &&
            Idate.getDate() >= newDate.getDate()) {
            date.style.background = 'white';
            return false;
        } else if (Idate.getMonth() > newDate.getMonth() &&
            Idate.getDate() <= 31) {
            date.style.background = 'white';
            return false;
        }
    } else if (Idate.getFullYear() > newDate.getFullYear()) {
        date.style.background = 'white';
        return false;
    }
}

function addressInput() {
    var address = document.getElementById("myaddress");
    if (address.value.length < 500) {
        address.style.background = 'white';
        return false;
    }
}