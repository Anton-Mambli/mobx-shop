import React from 'react';
import appStore from '../../stores/store';
import {observer} from 'mobx-react';

const CartTotal = () => {
    return (
        <div className="cart-total-sum">
            <strong>Суммма</strong>: {appStore.totalCartSum}
        </div>
    );
}

export default observer(CartTotal);