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
 
// ==============TASK 1==============
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

// ============== TASK 2 ==============
let item1 = 21
let items = 2
let tax = 15

function calculateTotalCost(price, quantity, taxRate){
  if(price && quantity && taxRate == "" || NaN) return "Invalid input"
  let totalCost = (price * quantity) 
  let tax =  (taxRate / 100) * totalCost // find 15 % of total costs
  return totalCost + tax
}
console.log(`Task 2: ${calculateTotalCost(item1, items, tax)}`);

// ============== TASK 3 ==============

// function can accept one property
// second param is a boolean type true/false
function checkEligibility(age, isEmploed){
  if(!age ) return 'enter age please'
  else{ 
    // If the person is over 18 and employed, they are eligible.
    if(age > 18 && isEmploed) return "You are eligible"
    // If the person is over 18 but unemployed, they are conditionally eligible.
    if(age > 18 && !isEmploed) return "You are conditionally eligible"
    // If the person is 18 or younger, they are not eligible.
    if(age <= 18 ) return "You are not eligible"
  }
}
console.log(`..empty.. ${checkEligibility('')}`);
console.log(`Tomy is 21 and ${checkEligibility(21,true)}`);
console.log(` Ann is 19 and ${checkEligibility(19,false)}`);
console.log(`John is 18 and ${checkEligibility(18)}`);
console.log(`Person is -- and ${checkEligibility(false)}`);

// ============== TASK 4 ==============

let storeItem1 = 43
let basket = 2
let taxRate = 15  // 15%
let discount = 10 // 10%

function calculateTotalCost(price, quantity, taxRate, discount){
  if(price && quantity && taxRate == "" || NaN) return "Invalid input"
  let totalCost = (price * quantity) 
  let tax =  (taxRate / 100) * totalCost // find 15 % of total costs
  if(discount) return totalCost + tax - discount
  return totalCost + tax
}
console.log(`Task 4: ${calculateTotalCost(item1, items, tax)}`);