//Business Logic
function Pizza(size, sauce, cheese, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = 0;
}

// Pizza.prototype.addValue = function (size, sauce, cheese, extra1, extra2, extra3) {
//   let price = size + sauce + cheese + extra1 + extra2 + extra3
//   this.price = price;
// }

Pizza.prototype.price = function () {
  if(this.size === "Small"){
    this.price = 10;
  } else if(this.size === "Medium"){
    this.price = 15;
  } else if(this.size === "Large"){
    this.price = 20; 
  } else {
    window.alert("yoooo pick a size, you cant have a pizza without the crust");
    return false;
  }   
  if (this.sauce === "Marinara") {
    this.price += 1;
  } else if (this.sauce === "Pesto")  {
    this.price += 1;
  } else if (this.sauce === "White Garlic") {
    this.price += 1;
  }
  this.price += this.toppings.length;
  console.log(this.toppings.length);
  return this.price;
}

// Pizza.prototype.showPizza = function(cheesename, saucename, extra1name, extra2name, extra3name) {
//   $("#myPizza").append("Your " + this.size + " " + cheesename + " with " + saucename + " sauce and extras that are " + extra1name + " " + extra2name + " " + extra3name + " will be ready soon! Please send " + this.price + "$ to Rylandadams@yahoo.com");
// }

function OrderMaker() {
  let size = $("option[name=size]:selected").val();
  let sauce = $("option[name=sauce]:selected").val();
  let cheese = $("option[name=cheese]:selected").val();
  let toppings = []
  $("option[name=topping]:selected").each(function() {
    toppings.push($(this).val());
  });
  let thisPizza = new Pizza(size, sauce, cheese, toppings);
  let price = thisPizza.price();
  //thisPizza.getPrice();
  //let price = thisPizza.getPrice();
  return thisPizza;
}

//UI logic
$(document).ready(function() {
  $("form#pizza").submit(function (event)  {
    event.preventDefault();

    $( "h2").empty();

    let thisPizza = new orderMaker();
    console.log(thisPizza)
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

    let checker = pizza.size(size);
    if (checker === false) {
      $( "h2").append("This is where your pizza would be if had picked a pie!");
    } else {
      pizza.addValue(size, sauce, cheese, extra1, extra2, extra3);
      pizza.showPizza(cheesename, saucename, extra1name, extra2name, extra3name)
    }
  });
});