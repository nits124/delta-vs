//JavaScript's async/await is a modern way to handle asynchronous operations, making code more readable and maintainable compared to callbacks or Promises.
// making asynchronous code look like synchronous code.

// Basic Syntax
// async before a function makes it return a Promise.
// await pauses execution until the Promise resolves.

// async function fetchData() {
//   return "Hello, Async!";
// }
// fetchData().then(console.log); // Output: Hello, Async!

//await can be used inside an async function to wait for a Promise to resolve.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function example() {
  console.log("Before delay");
  await delay(2000); // Waits for 2 seconds
  console.log("After delay"); // Runs after 2 sec
}
example();

