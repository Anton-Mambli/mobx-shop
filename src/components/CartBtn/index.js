import React from 'react';
import Button from '@material-ui/core/Button';
import appStore from '../../stores/store';
const CartBtn = props => {
    return (
        <div className="cart-btn">
            <div>
                <Button variant="contained" color="secondary" onClick={appStore.clearCart}>
                    Очистить корзину
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={appStore.sendCart}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

export default CartBtn;