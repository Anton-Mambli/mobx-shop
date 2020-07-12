import React from 'react';
import {observer} from 'mobx-react';
import GoodsCard from '../GoodsCard';

const Catalog = props => {
    let goodsList = props.store.goodsList;
    return (
        <React.Fragment>
            <h2 className="title">Каталог</h2>
            <div className="catalog-list">

                {goodsList.map((item, index) => (
                    <GoodsCard {...item} key={index} increase={props.store.increaseCount} decrease={props.store.decreaseCount} addToCart={props.store.addToCart}/>
                ))}
            </div>
        </React.Fragment>
    );
}

export default observer(Catalog);