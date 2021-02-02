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