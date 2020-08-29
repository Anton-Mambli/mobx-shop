import React from 'react';
import Button from '@material-ui/core/Button';
import cartStore from '../../stores/cartStore';
import goodStore from '../../stores/goodsStore';
import {observer} from 'mobx-react';

const CartBtn = props => {
    return (
        <div className="cart-btn">
            <div>
                <Button variant="contained" color="secondary" onClick={() => cartStore.clearCart(goodStore,cartStore)} disabled = {cartStore.length === 0}>
                    Очистить корзину
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={() => cartStore.sendCart(goodStore,cartStore)} disabled = {cartStore.length === 0}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

export default observer(CartBtn);