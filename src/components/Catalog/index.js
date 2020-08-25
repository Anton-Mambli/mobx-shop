import React from 'react';
import {observer} from 'mobx-react';
import GoodsCard from '../GoodsCard';
import goodStore from '../../stores/goodsStore';

const Catalog = () => {
    return (
        <React.Fragment>
            <h2 className="title">Каталог</h2>
            <div className="catalog-list">
                {goodStore.data.map((item, index) => (
                    <GoodsCard
                        {...item}
                        key={index}
                        increaseCount = {goodStore.increaseItemCount}
                        decreaseCount = {goodStore.decreaseItemCount}
                        addToCart = {goodStore.addToCart}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

export default observer(Catalog);