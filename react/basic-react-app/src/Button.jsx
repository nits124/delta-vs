function printHello() {
  console.log("hello");  
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      {/* <p onclick={}>this para is event demo</p> */}
    </div>
  )
}



// Single Line Return (Implicit Return with Arrow Functions)
// When the component has only one line of JSX to return, you can use an implicit return with an arrow function.

// Example:

// const Title = () => <h1>I am Title!</h1>;
//---------------------------

// Multi-Line Return (Explicit Return)
// When the component has multiple lines of JSX, you need to wrap the returned JSX in parentheses () for better readability and to avoid syntax errors.

// Example:

// const Title = () => {
//     return (
//         <div>
//             <h1>I am Title!</h1>
//             <p>This is a subtitle.</p>
//         </div>
//     );
// };
//----------------
// conditional Return
// You can use JavaScript logic (like if or ternary operators) to conditionally return different JSX based on some state or props.

// Example with if statement:

// const Greeting = ({ isLoggedIn }) => {
//     if (isLoggedIn) {
//         return <h1>Welcome Back!</h1>;
//     } else {
//         return <h1>Please Sign In</h1>;
//     }
// };
//-----------------------------
// Ternary Operator:

// const Greeting = ({ isLoggedIn }) => (
//     isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>
// );
//-----------------------
// Sometimes, a component might render nothing. In such cases, you can return null. This is useful for conditional rendering when you don't want to display anything.
// Example:

// const Notification = ({ show }) => {
//     if (!show) {
//         return null;
//     }
//     return <div>You have new notifications!</div>;
// };
//-----------------------------
// To avoid unnecessary HTML wrappers in the DOM, you can use React Fragments (<React.Fragment> or shorthand <>) to group multiple elements.

// const FragmentExample = () => {
//     return (
//         <>
//             <h1>Title</h1>
//             <p>Paragraph inside a fragment</p>
//         </>
//     );
// };