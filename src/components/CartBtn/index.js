import React from 'react';
import Button from '@material-ui/core/Button';

const CartBtn = props => {
    return (
        <div className="cart-btn">
            <div>
                <Button variant="contained" color="secondary" onClick={props.onClear}>
                    Очистить корзину
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={props.onSend}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

export default CartBtn;