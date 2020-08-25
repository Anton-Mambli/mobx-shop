import React from 'react';
import cartStore from '../../stores/cartStore';
import {observer} from 'mobx-react';

const CartTotal = () => {
    return (
        <div className="cart-total-sum">
            <strong>Суммма</strong>: {cartStore.totalSym}
        </div>
    );
}

export default observer(CartTotal);