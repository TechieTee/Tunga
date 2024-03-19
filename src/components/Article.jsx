import React from 'react'

const Article = ({article}) =>{

    return(
        <div style={{padding:'20px 20px 20px 40px', textAlign:'center'}}>
            <img src={article.imgUrl} height='400px' width='100%'/>
            <h3 style={{marginTop:'20px'}}>{article.name}</h3>
            <h4>{article.date}</h4>
        </div>
    )
}

export default Article