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