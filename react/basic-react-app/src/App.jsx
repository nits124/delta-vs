import "./App.css";
// import Title1 from "./Title1.jsx";//all fn name start from capital letter
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Product from "./product.jsx";


function App() {//<Title />---for render single element
  return (
    <>
      {/* <Product
        title="Cool Gadget"
        price={500}
        features="Lightweight and compact"
        features2="Battery lasts 10 hours"
      /> */}
      
      {/* <Button /> */}
      <ProductTab />
    </>
  );
  //( to return multiple function, wrap it in div element
  // <div>
  //   <h1>this is my app component.</h1>
  //   <Title1 />
  //    {/* or write <Title1></Title1> */}
  //   <Titles />
  // </div> 
  // );
}

export default App;
