let cart = [];
// let itemInput = document.getElementById("itemInput");
// let addItemButton = document.getElementById("addItemButton");
// let removeItemButton = document.getElementById("removeItemButton");
// let cartList = document.getElementById("cart");
 
// addItemButton.addEventListener("click", function () {
//   let item = itemInput.value;
 
//   if (item === "") {
//     alert("Please enter an item.");
//     return;
//   }
 
//   cart.push(item); // Add item to cart array
//   renderCart();
//   itemInput.value = ""; // Clear the input field
// });
 
// removeItemButton.addEventListener("click", function () {
//   cart.pop(); // Remove last item from cart array
//   renderCart();
// });
 

let userName= ''
let userLastName = 'smith'
function formatFullName (firstName, lastName ){
  let name
  let last
  if(firstName==="") return "Invalid name input"
  if(lastName==="") return "Invalid lastName input"

  for(let i = 0; i <= 1; i++ ){
    name= firstName.charAt(0).toUpperCase() + firstName.slice(1)
    last= lastName.charAt(0).toUpperCase() + firstName.slice(1)
  }
  return name+', '+lastName
}
console.log(`Task 1: ${formatFullName(userName,userLastName)}`);
