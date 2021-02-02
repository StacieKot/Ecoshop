var formElement = document.forms.review;
formElement.onsubmit=validateReviewForm;

function validateReviewForm() {
   var newReview=formElement.elements.newreview;
   var name = formElement.elements.name;
   var email = formElement.elements.emailaddress;

   var newReviewValue = newReview.value;
   var nameValue = name.value;
   var emailValue = email.value;

   if (newReviewValue.length < 1) {
      alert("Введите отзыв");
      newReview.focus();
      return false;
   }
   if (nameValue.length < 1) {
      alert("Введите имя");
      name.focus();
      return false;
   }

   if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
      alert("Введите корректный email");
      email.focus();
      return false;
   }
   return true;
}


