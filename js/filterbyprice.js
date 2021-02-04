var product = document.getElementsByClassName('product-cell');
var view =document.getElementById('icon-view');
var productQuantity = document.getElementsByClassName('product-cell');  

function productsview(){
   for(var t=0;t<productQuantity.length;t++){
      if(view.checked == true){
         product[t].style.display='flex';
      } else{
         product[t].style.display='block';
      }
   }
   filterByPrice();
}

function filterByPrice(){
   for(var i=0; i<productQuantity.length;i++){
      var minPrice = parseFloat(document.getElementById('min').value);
      var maxPrice = parseFloat(document.getElementById('max').value);
      var price = parseInt(document.querySelectorAll('.links>a:nth-child(3)')[i].innerHTML);
      for(var t=0;t<productQuantity.length;t++){
         if(view.checked == true){
            product[i].style.display='flex';
         } else{
            product[i].style.display='block';
         }
      }
      if(price< minPrice || price>maxPrice){
         product[i].style.display = 'none';
      }
   }
}

function resetFilter(){
   document.getElementById('min').value=" ";
   document.getElementById('max').value=" ";
   filterByPrice();
}