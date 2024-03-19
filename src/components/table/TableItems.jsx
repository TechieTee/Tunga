import React from 'react'

export const ProductCategoryRow = ({productCategory}) => {
    return (
        <>
            <tr colSpan={1}>
                <td>{productCategory}</td>
            </tr>
        </>
    )
}

export const ProductRow = ({productName,productPrice}) => {
    return (
        <>
            <tr colSpan={2}>
                <td>{productName}</td>
                <td>{productPrice}</td>
            </tr>
        </>
    )
}

