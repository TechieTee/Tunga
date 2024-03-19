import React from "react"

const ShopingItem = ({ item }) => {
    return (
        <div style={{
            'backgroundColor': 'gray',
            'color': '#fff',
            'borderRadius': '10px',
            'padding': '20px',
            'margin': '2px 0'
        }}>
            <div style={{
                'display': 'flex',
                'justifyContent': 'space-between',
                'fontSize': '24px'
            }}>
                <h5>{item.name}</h5>
                <h5>{item.price}</h5>
            </div>
            <p style={{ 'marginTop': '10px', color:'#fff'}}>{item.description}</p>
        </div>
    )
}


export default ShopingItem
