
import './App.css';
import Products from './components/Products.js';
import ProductForm from './components/ProductForm';
import { useState } from 'react';


function App() {

  const response = [
{
  id: "p1",
  title: "Book",
  amount: 500,
  date: new Date(2024, 3 , 15),
},

{
  id: "p2",
  title: "Pen",
  amount: 60,
  date: new Date(2024, 3 , 15),
},

{
  id: "p3",
  title: "Laptop",
  amount: 65000,
  date: new Date(2024, 3 , 15),
},


  ];

  
  const [data, setData] = useState(response);

  // we passed this func as a prop to child component
  function newProductHandler(newProduct){
    console.log("received ", newProduct, "from child component(ProductForm)");

    // updating data
    setData([...data, newProduct]);
  }

  return (
    <div className="App">
      <ProductForm newProductHandler={newProductHandler}></ProductForm>
      <Products products={data}></Products>
    </div>
  );
}

export default App;
