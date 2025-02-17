// callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let result = myCalculator(5, 5);
// myDisplayer(result);

//----------------
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.
// Before Promises, JavaScript relied heavily on callbacks, leading to callback hell (nested callbacks that are difficult to read and maintain)
// States of a Promise
// A Promise has three possible states:

// Pending – The initial state, before the operation completes.
// Fulfilled – The operation is successful, and the promise returns a result.
// Rejected – The operation fails, and the promise returns an error.
// Once a Promise is fulfilled or rejected, it becomes settled and cannot change state.

//----------
// let promise = new Promise((resolve, reject) => {
//   // Async operation
// });
// resolve(value) – Call this function when the operation is successful.
// reject(error) – Call this function when the operation fails.
////----------

const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to test rejection
  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});

myPromise
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });

  //-------------------------------------------
// Simulated database
const usersDB = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
};
// Function that returns a Promise
function getUserData(userId) {
  return new Promise((resolve, reject) => {
      if (usersDB[userId]) {
          resolve(usersDB[userId]); // Resolve with user data
      } else {
          reject("User not found!"); // Reject with error
      }
  });
}
// Calling the function and handling the Promise
getUserData(1)
  .then((user) => {
      console.log("User found:", user);
  })
  .catch((error) => {
      console.error("Error:", error);
  });

getUserData(3) // Invalid ID, will trigger rejection
  .then((user) => {
      console.log("User found:", user);
  })
  .catch((error) => {
      console.error("Error:", error);
  });
