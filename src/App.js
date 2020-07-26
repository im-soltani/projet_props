import React from 'react';
import ProductTable from './components/ProductTable';
import './App.css';
const header=[
  {price:"price",name:"name",category:"category"}
]
const products=[
  
  {style:"color",price : 250 ,name : "khaled" ,category : "Electronics" },
  {style:"color",price : 300, name :"mourad" ,category :"clothes"}
]
function App() {
  return (
    <div className="App">
      
      <ProductTable  products={products} header={header}/>
       
    </div>
  );
}

export default App;
