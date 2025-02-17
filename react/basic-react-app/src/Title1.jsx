function Title1() {
    return <h1>i am title11!</h1>
  };

export default Title1;

// // File: utils.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// // Importing Named Exports:
// import { add, subtract } from './utils';
// console.log(add(2, 3)); // 5
//===============================

// import { add as sum, subtract as diff } from './utils';
// console.log(sum(2, 3)); // 5

//---------------------------------
// // File: mixedExports.js
// export const multiply = (a, b) => a * b;
// export default function divide(a, b) {
//     return a / b;
// }

// // Importing:
// import divide, { multiply } from './mixedExports';
// console.log(divide(10, 2)); // 5
// console.log(multiply(10, 2)); // 20

//----------------------------
// You can export values or functions directly as part of their declaration.
// Example:

// export const greet = (name) => `Hello, ${name}!`;

// export function sayGoodbye(name) {
//     return `Goodbye, ${name}!`;
// }
//---------------------------
// Re-export everything from another module.
// Example:

// // File: math.js
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;

// // File: reExport.js
// export * from './math';

// // Importing:
// import { add, multiply } from './reExport';

//------------------------------------
// Export Default with a Different Name
// Useful for dynamic imports or simpler names.
// Example:

// export default function mainUtility() {
//     console.log('Main utility function');
// }

// import main from './mainUtility'; // No need for the original name
// main(); // Logs: Main utility function

//-------------------------------
// Key Differences Between Default and Named Exports
// Aspect           	Default Export                         	Named Export
// Syntax	export       default value	                       export { value }
// Import Syntax	     import AnyName from './module'	       import { value } from './module'
// Number of Exports	 Only one per file	                     Multiple per file
// Renaming            	Can be renamed freely	                Must use as for renaming

//------------------------------------
// When to Use What?

// Default Export:
// When a module primarily represents a single entity.
// Example: React components, utilities, or single-purpose modules.

// Named Export:
// When a module contains multiple utilities or values.
// Example: Libraries or shared utility files.

