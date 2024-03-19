import React from 'react'
import { ProductCategoryRow, ProductRow } from './TableItems'



const ProductTable = ({ ProductCategoryData, ProductData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>


          {ProductCategoryData.map((productcategory) => {
            return (<ProductCategoryRow key={productcategory.id} productCategory={productcategory.title} />)
          })}


          {ProductData.map((productrow) => {
            return (<ProductRow key={productrow.id} productName={productrow.name} productPrice={productrow.price} />)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ProductTable

