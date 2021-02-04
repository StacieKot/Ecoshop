var formElement2 = document.forms.subscription;
formElement2.onsubmit = validateSubscriptionForm;

function validateSubscriptionForm() {
   var email = formElement2.elements.email;
   var emailValue = email.value;
   if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
      alert("Введите корректный email");
      return false;
   }
   return true;
}


function loadArticle3() {
   $('#article3').load("article3.html");
}
function loadArticle2() {
   $('#article2').load("article2.html");
}


var formLogin=document.forms.loginform;
formLogin.onsubmit = validateLoginForm;
function validateLoginForm(){
    var userName = formLogin.elements.username;
    var password = formLogin.elements.password;
    var userNameValue = userName.value;
    var passwordValue = password.value;
    if(userNameValue.length<1){
      alert("Введите ваше имя");
      userName.focus();
      return false;
    }
    if(passwordValue.length<1){
      alert("Введите пароль");
      password.focus();
      return false;
    }
    return true;
 }