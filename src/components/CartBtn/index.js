import React from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import { cartCollection } from '../../stores/store';

const CartBtn = props => {
    return (
        <div className="cart-btn">
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => cartCollection.clearCart()}
                    disabled={cartCollection.list.length === 0}
                >
                    Очистить корзину
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => cartCollection.sendCart()}
                    disabled={cartCollection.list.length === 0}
                >
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
};

export default observer(CartBtn);
