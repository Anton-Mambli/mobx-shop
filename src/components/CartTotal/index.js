import React from 'react';
import { observer } from 'mobx-react';
import { cartCollection } from '../../stores/store';

const CartTotal = () => {
    return (
        <div className="cart-total-sum">
            <strong>Суммма</strong>: {cartCollection.totalSum}
        </div>
    );
};

export default observer(CartTotal);
