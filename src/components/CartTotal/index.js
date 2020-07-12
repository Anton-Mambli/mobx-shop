import React from 'react';


const CartTotal = ({totalCartSum}) => {
    return (
        <div className="cart-total-sum">
            <strong>Суммма</strong>: {totalCartSum}
        </div>
    );
}

export default CartTotal;