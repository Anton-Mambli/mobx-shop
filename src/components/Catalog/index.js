import React from 'react';
import {observer} from 'mobx-react';
import GoodsCard from '../GoodsCard';
import appStore from '../../stores/store';

const Catalog = () => {
    return (
        <React.Fragment>
            <h2 className="title">Каталог</h2>
            <div className="catalog-list">
                {appStore.goodsList.map((item, index) => (
                    <GoodsCard {...item} key={index} increase={appStore.increaseCount} decrease={appStore.decreaseCount} addToCart={appStore.addToCart}/>
                ))}
            </div>
        </React.Fragment>
    );
}

export default observer(Catalog);