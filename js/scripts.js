//Business Logic
function Pizza(size, sauce, cheese, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = 0;
}


Pizza.prototype.priceSize = function () {
  if(this.size === "Small") {
    this.price = 10;
  } else if(this.size === "Medium"){
    this.price = 15;
  } else if(this.size === "Large"){
    this.price = 20; 
  } else {
    window.alert("yoooo pick a size, you cant have a pizza without the crust");
    this.size === "false";
  };
  this.price += this.toppings.length;
  return this.price;
}

Pizza.prototype.priceSauce = function () {
  if (this.sauce === "Marinara") {
    this.price += 1;
  } else if (this.sauce === "Pesto")  {
    this.price += 1;
  } else if (this.sauce === "White Garlic") {
    this.price += 1;
  };
  this.price += this.toppings.length;
  return this.price;
}
Pizza.prototype.priceCheese = function () {
  if (this.cheese === "Cheddar") {
    this.price += 3;
  } else if (this.cheese === "Mozzarella")  {
    this.price += 4;
  } else if (this.cheese === "Havarti") {
    this.price += 5;
  }
  this.price += this.toppings.length;
  return this.price;
}

function OrderMaker() {
  let size = $("option[name=size]:selected").val();
  let sauce = $("option[name=sauce]:selected").val();
  let cheese = $("option[name=cheese]:selected").val();
  let toppings = []
  $("option[name=topping]:selected").each(function() {
    toppings.push($(this).val());
  });
  let thisPizza = new Pizza(size, sauce, cheese, toppings);
  return thisPizza;
}

//UI logic
$(document).ready(function() {
  $("form#pizza").submit(function (event)  {
    event.preventDefault();

    $( "h2").empty();

    let thisPizza = new OrderMaker();
    thisPizza.priceSize();
    let pricesize = thisPizza.priceSize();
    thisPizza.priceSauce();
    let pricesauce = thisPizza.priceSauce();
    thisPizza.priceCheese();
    let pricecheese = thisPizza.priceCheese();

    if (this.size === "false") {
      $( "h2").append("This is where your pizza would be if had picked a pie!");
    } else {
      $( "h2").append(`<p><span>Size:</span> ${thisPizza.size}</p>`).append(`<p><span>Sauce:</span> ${thisPizza.sauce}</p>`).append(`<p><span>Cheese:</span> ${thisPizza.cheese}</p>`).append(`<p><span>Toppings:</span> ${thisPizza.toppings}</p>`).append(`<p><span>Order Total:$</span> ${thisPizza.price}</p>`);
    }
  });
});