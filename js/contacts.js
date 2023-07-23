function onClick() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var labelname = document.getElementById("label-name");
    var labelemail = document.getElementById("label-email");
    var labelsubject = document.getElementById("label-subject");
    var labelmessage = document.getElementById("label-message");
    /* all empty */
    if (name.value.length <= 0 &&
        email.value.length <= 0 &&
        subject.value.length <= 0 &&
        message.value.length <= 0) {
        name.style.background = 'orangered';
        email.style.background = 'orangered';
        subject.style.background = 'orangered';
        message.style.background = 'orangered';
        labelname.style.color = 'orangered';
        labelemail.style.color = 'orangered';
        labelsubject.style.color = 'orangered';
        labelmessage.style.color = 'orangered';
        alert("điền đầy đủ thông tin");
        return false;
    }
    /* name empty */
    else if (name.value.length <= 0) {
        name.style.background = 'orangered';
        labelname.style.color = 'orangered';
        alert("tên của bạn không được bỏ trống");
        return false;
    } else if (name.value.length > 100) {
        name.style.background = 'orangered';
        labelname.style.color = 'orangered';
        alert("tên của bạn không được quá 100 ký tự");
        return false;
    }
    /* emali empty */
    else if (email.value.length <= 0) {
        email.style.background = 'orangered';
        labelemail.style.color = 'orangered';
        alert('email không được bỏ trống');
        return false;
    } else if (email.value.length > 100) {
        email.style.background = 'orangered';
        labelemail.style.color = 'orangered';
        alert('email không được quá 100 ký tự');
        return false;
    } else if (!filter.test(email.value)) {
        email.style.background = 'orangered';
        labelemail.style.color = 'orangered';
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        return false;
    }
    /* subject empty */
    else if (subject.value.length <= 0) {
        subject.style.background = 'orangered';
        labelsubject.style.color = 'orangered';
        alert('tiêu đề không được bỏ trống');
        return false;
    } else if (subject.value.length < 50) {
        subject.style.background = 'orangered';
        labelsubject.style.color = 'orangered';
        alert('tiêu đề không được ít hơn 50 ký tự');
        return false;
    } else if (subject.value.length > 250) {
        subject.style.background = 'orangered';
        labelsubject.style.color = 'orangered';
        alert('tiêu đề không được quá 250 ký tự');
        return false;
    }
    /* message empty */
    else if (message.value.length <= 0) {
        message.style.background = 'orangered';
        labelmessage.style.color = 'orangered';
        alert("nội dung message không được bỏ trống");
        return false;
    } else if (message.value.length > 500) {
        message.style.background = 'orangered';
        labelmessage.style.color = 'orangered';
        alert("nội dung message không được quá 500 ký tự");
        return false;
    }
    /* successful */
    document.getElementById("form").style.display = 'none';
    document.getElementById("successful").style.display = 'block';
    alert("tất cả các trường đểu đúng");
    return false;
}

function nameInput() {
    var name = document.getElementById("name");
    var labelname = document.getElementById("label-name");
    if (name.value.length > 0 && name.value.length < 101) {
        name.style.background = 'white';
        labelname.style.color = 'green';
        return false;
    } else if (name.value.length > 100) {
        name.style.background = 'orangered';
        labelname.style.color = 'orangered';
        return false;
    }
}

function emailInput() {
    var email = document.getElementById("email");
    var labelemail = document.getElementById("label-email");
    if (email.value.length > 0 && email.value.length < 101) {
        email.style.background = 'white';
        labelemail.style.color = 'green';
        return false;
    } else if (email.value.length > 100) {
        email.style.background = 'orangered';
        labelemail.style.color = 'orangered';
        return false;
    }
}

function subjectInput() {
    var subject = document.getElementById("subject");
    var labelsubject = document.getElementById("label-subject");
    if (subject.value.length > 50) {
        subject.style.background = 'white';
        labelsubject.style.color = 'green';
        return false;
    }
}

function messageInput() {
    var message = document.getElementById("message");
    var labelmessage = document.getElementById("label-message");
    if (message.value.length <= 500) {
        message.style.background = 'white';
        labelmessage.style.color = 'green';
        return false;
    } else if (message.value.length > 500) {
        message.style.background = 'orangered';
        labelmessage.style.color = 'orangered';
        return false;
    }
}