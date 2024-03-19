import React from 'react'
import StoredData from '../components/form/StoredData'
import FormValues from '../components/form2/Form'
import Layout from '../components/Layout'
import ShopingItem from '../components/ShopingItem'
import FilterableProductTable from '../components/table/FilterableProductTable'
import ButtonIncDec from '../components/ButtonIncDec'
import { dataItems } from '../Data'

const PlayGround = () => {
    return (
        <Layout>
            <div style={{ padding: '40px 20%' }}>
                {dataItems.map((item) => {
                    return (
                        <ShopingItem item={item} key={item.name} />
                    )
                })}

            </div>
            <ButtonIncDec />
            <FormValues />
            <StoredData />
            <FilterableProductTable/>
        </Layout>
    )
}

export default PlayGround