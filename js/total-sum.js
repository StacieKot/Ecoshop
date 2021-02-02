var cartRow=document.getElementsByClassName('shopping-cart-item');
var quantity=1;
var cost=0;
for(var i=0; i<cartRow.length; i++){
   var price=parseInt(document.getElementsByClassName('price')[i].innerHTML);
   document.getElementsByClassName('sum')[i].innerText=price*quantity;
   cost=cost+price*quantity;
   ssuumm(i);
}
document.getElementById('cost').innerText=cost+ " р.";
document.getElementById('total').innerText=cost+ " р.";

function ssuumm(i){
   document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByClassName("quantity")[i].onclick = function() {
         var quantity = document.getElementsByClassName("quantity")[i].value;
         var price=parseInt(document.getElementsByClassName('price')[i].innerHTML);
         document.getElementsByClassName('sum')[i].innerText=price*quantity;
         cost=0;
         for(var t=0; t<cartRow.length; t++){
            cost=cost+parseInt(document.getElementsByClassName('sum')[t].innerText);
         }
         document.getElementById('cost').innerText=cost +" р.";
         document.getElementById('total').innerText=cost +" р.";
        };
     });
}

