//Business Logic
function Pizza(size, toppings) {
  this.price = 0;
  this.size = size;
  this.toppings = toppings;
}

//UI logic
$(document).ready(function() {
  $("form#pizza").submit(function (event)  {
    event.preventDefault();

    let size = parseInt($("select#size").val())
    let toppings = parseInt($("form#toppings").val())

    console.log(size);
    console.log(toppings);
    let pizza = new Pizza(size, toppings);
    console.log(pizza);

  });
});