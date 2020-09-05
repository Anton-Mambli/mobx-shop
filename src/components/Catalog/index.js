import React from 'react';
import { observer } from 'mobx-react';
import GoodsCard from '../GoodsCard';
import { goodsCollection } from '../../stores/store';

const Catalog = () => {
    return (
        <React.Fragment>
            <h2 className="title">Каталог</h2>
            <div className="catalog-list">
                {goodsCollection.list.map((item, index) => (
                    <GoodsCard {...item} key={index} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default observer(Catalog);
