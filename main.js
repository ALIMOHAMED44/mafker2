// document.addEventListener("click", function() {
//     document.querySelector("#Email").onclick = function(){
//         document.querySelector("#password").style.display = "none"
//     }
// })
// var Email =  document.querySelector("#Email").onclick = function(){document.querySelector("#password").style.display = "none"}
// if (Email = Email) {
     
// }else{
//     document.querySelector("#1").onclick = function(){
//         document.querySelector("#2").style.display = "none"
//     }
// }
function formdata() {

    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    
    var text ="";
    if (Email.indexOf("@") == -1 ||  Email.length < 6) {

        text="please enter valid Email";
        error.innerHTML=text;
        return false;

    }

    else if (password.length < 9) {

        text="please enter valid password";
        error.innerHTML=text;
        return false;

    }
    
    else{
        alert("Thank you for visiting our site")
        return true;
    }
}