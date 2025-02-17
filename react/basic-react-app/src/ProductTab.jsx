import Product from "./product.jsx";

function ProductTab() {
    let options = ["kdj", "jkl", "kll"];
    let options2=  [<li>"kdsl"</li>, <li>"klds"</li>, <li>"kfdlk"</li> ];
    return (
        <>
            <Product title="phone" price={888}  features={options} features2={options2} />
            <Product title="laptop" price={888} />
             {/* to put number in var. wrap it in curly brckt or ""   */}
            <Product title="pen" price={333/2} />
            <Product title="pens"  />
        </>
    );
}
export default ProductTab;