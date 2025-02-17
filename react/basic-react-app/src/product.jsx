import "./Product.css";

function Product({ title, price = 22, features, features2 }) {
  let styles= {backgroundColor : price > 444 ? "yellow" : ""};
  let asd= {color:"red"};
  // price=22 is default as if not mentioned  price in jsx file 
    return (
      <div className="Product" style={styles}>
        <h3 style={asd}>{title}</h3>
        <h5>Price: {price / 2} </h5>
        <p>{features}</p>
        <p>{features2}</p>
        {price > 444 ? <p><a href="">discount 5%</a> </p> : null}
        {/* <p>{features.map((feature) => <li>{feature}</li> )}</p> */}
      </div>
    );
}

export default Product;

// function product(props) {
//   console.log(props);
// }
// Props are arguments passed into React components.