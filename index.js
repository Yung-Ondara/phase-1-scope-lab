// Write your solution in this file!
var customerName = 'bob'; // Global variable
var bestCustomer; // Declare bestCustomer in global scope
const leastFavoriteCustomer = 'someone'; // Declare leastFavoriteCustomer as a constant

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will cause an error si nce leastFavoriteCustomer is a const
}




