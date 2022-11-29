function formdata() {
    var username = document.getElementById("username").value;
    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var password2 = document.getElementById("password2").value;





    var text ="";

    if (username.length < 4 ) {

        text="please enter valid username";
        error.innerHTML=text;
        return false;
    }else if (Email.indexOf("@") == -1 ||  Email.length < 6) {

        text="please enter valid Email";
        error.innerHTML=text;
        return false;

    }else if (password.length < 9) {

        text="please enter valid password";
        error.innerHTML=text;
        return false;
    }else if (password2.length < 9) {

        text="please enter right password";
        error.innerHTML=text;
        return false;
    }

    else{
        return true;
    } 
}