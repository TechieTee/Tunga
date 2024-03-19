import React from 'react'
import ProductTable from './ProductTable'
import { ProductCategoryData, ProductData } from '../../Data'


const FilterableProductTable = () => {
    return (
        <div>
            searchbar
            <ProductTable ProductCategoryData={ProductCategoryData} ProductData={ProductData} />
        </div>
    )
}

export default FilterableProductTable