//Business Logic
function Pizza(size, toppings) {
  this.price = 0;
  this.size = size;
  this.toppings = toppings;
}
let pizza = new Pizza("Med", "cheese");
    console.log(pizza);

//UI logic
$(document).ready(function() {
  //$("form#newPizza").submit(function (event)  {
    event.preventDefault();


    let pizza = new Pizza(0, "Med", "cheese");
    console.log(pizza);

  //});
});