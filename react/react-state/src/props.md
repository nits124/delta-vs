Props are arguments passed into React components.

Props are passed to components via HTML attributes.

props stands for properties.
-------------------------

// Parent Component
function App() {
  return (
    <div>
      <Greeting name="Alice" />   //hello, alice 
      <Greeting name="Bob" />          hello, bob
      <Greeting />                  hello stranger
    </div>
  );
}
// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: "Stranger",
};
export default App;
--------------------------
You can pass multiple props to a child component.

function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Profile name="Alice" age={25} hobby="Reading" />
      <Profile name="Bob" age={30} hobby="Hiking" />
    </div>
  );
}

export default App;
-------------------------------------
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  <!-- or
   const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ]; -->
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
export default Garage;
output....
Who lives in my garage?
I am a Ford
I am a BMW
I am a Audi
