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
    let sauce = parseInt($("select#sauce").val())
    let cheese = parseInt($("select#cheese").val())
    let extra1 = parseInt($("select#extra1").val())
    let extra2 = parseInt($("select#extra2").val())
    let extra3 = parseInt($("select#extra3").val())
    

    console.log(size);
    console.log(toppings);
    let pizza = new Pizza(size, toppings);
    console.log(pizza);

  });
});