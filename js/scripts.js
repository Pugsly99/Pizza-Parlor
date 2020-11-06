//Business Logic
function Pizza() {
  this.price = 0;
  this.size;
  this.toppings;
}

Pizza.prototype.addValue = function (size, sauce, cheese, extra1, extra2, extra3) {
  let price = size + sauce + cheese + extra1 + extra2 + extra3
  this.price = price;
}

Pizza.prototype.size = function (size) {
  
  if(size === 10){
    this.size = "Small";
  } else if(size === 15){
    this.size = "Medium";
  } else 
    this.size = "Large"; 
}


//UI logic
$(document).ready(function() {
  $("form#pizza").submit(function (event)  {
    event.preventDefault();

    let pizza = new Pizza();
    const size = parseInt($("select#size").val());
    const sauce = parseInt($("select#sauce").val());
    const cheese = parseInt($("select#cheese").val());
    const extra1 = parseInt($("select#extras1").val());
    const extra2 = parseInt($("select#extras2").val());
    const extra3 = parseInt($("select#extras3").val());

    pizza.size(size);

    pizza.addValue(size, sauce, cheese, extra1, extra2, extra3);
    
    //let toppings = sauce + cheese + extra1 + extra2 + extra3 

    
    console.log(pizza);

  });
});