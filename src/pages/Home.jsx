import React from 'react'
import {articleItems } from '../Data'
import Article from '../components/Article';
import Layout from '../components/Layout';





const Home = () => { //JSX
    return (
        <Layout>

            <div className='body-wrapper'>
                <div className='view-port'>
                    <h1>DEVELOPED</h1>
                    <h2>By Fatima</h2>
                </div>
                <div className="text-with-lines">
                    <p>OUR ARTICLES</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {articleItems.map((article) => { return (<Article key={article.name} article={article} />) })}
                </div>


            </div>
           
        </Layout>
    )
}


export default Home


