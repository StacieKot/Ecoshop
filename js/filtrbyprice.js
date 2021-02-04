
function filtrByPrice(){
var productQuantity = document.getElementsByClassName('product-cell');
for(var i=0; i<productQuantity.length;i++){
   var minPrice = parseFloat(document.getElementById('min').value);
   var maxPrice = parseFloat(document.getElementById('max').value);
   var price = parseInt(document.querySelectorAll('.links>a:nth-child(3)')[i].innerHTML);
   var product = document.getElementsByClassName('product-cell')[i];
   product.hidden=false;
   if(price< minPrice || price>maxPrice){
      product.hidden=true;
   }
}
}


