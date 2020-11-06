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

Pizza.prototype.showPizza = function(cheesename, saucename, extra1name, extra2name, extra3name) {
  $("#myPizza").append("Your " + this.size + " " + cheesename + " with " + saucename + " sauce and " + extra1name + " " + extra2name + " " + extra3name + " will be ready soon!");
}




//UI logic
$(document).ready(function() {
  $("form#pizza").submit(function (event)  {
    event.preventDefault();

    $( "h2").empty();

    let pizza = new Pizza();
    const size = parseInt($("select#size").val());
    const sauce = parseInt($("select#sauce").val());
    const saucename = $("#sauce option:selected").text();

    const cheese = parseInt($("select#cheese").val());
    const cheesename = $("#cheese option:selected").text();

    const extra1 = parseInt($("select#extras1").val());
    const extra1name = $("#extras1 option:selected").text();

    const extra2 = parseInt($("select#extras2").val()); 
    const extra2name = $("#extras2 option:selected").text();

    const extra3 = parseInt($("select#extras3").val());
    const extra3name = $("#extras3 option:selected").text();

    pizza.size(size);
    pizza.addValue(size, sauce, cheese, extra1, extra2, extra3);
    pizza.showPizza(cheesename, saucename, extra1name, extra2name, extra3name)
  });
});