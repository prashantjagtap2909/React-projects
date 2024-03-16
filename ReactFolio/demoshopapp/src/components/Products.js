import ProductItem from "./ProductItem.js";
import './Products.css';

function Products({products}){
    return(
        <div className="products">
          {
            products.map((product) => <ProductItem productInfo={product}></ProductItem>)
          }
        </div>
    );
} 

export default Products;