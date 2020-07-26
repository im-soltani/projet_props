import React from 'react';


function ProductTable({products,header}) {
    return (
        <div>
         
         
         <table >
         {header.map(header =>
             <tr>
                 <th>{header.name}</th>
                <th>{header.price}</th>
                 <th>{header.category}</th>
             </tr>
         )}
             {products.map(product => 
             <tr>
                 <td>{product.name}</td>
                 <td>{product.price}</td>
                 <td>{product.category}</td>
             </tr>
   )       
} 
</table>
        </div>
    )
}
export default ProductTable