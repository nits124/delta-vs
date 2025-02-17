export default function Button({action}) {
  return <button onClick={action}>Buy new ticket</button>;
}
//The value of onClick is set to action, which means that whatever function is passed as the action prop will be executed when the button is clicked.
//ex in othr jsx 
//function App() {
  // const handleClick = () => {
  //   alert("Ticket purchased!");
  // };

  // return (
  //   <div>
  //     <h1>Welcome to the Ticket Store</h1>
  //     <Button action={handleClick} />