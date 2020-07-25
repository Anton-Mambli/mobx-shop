import React from 'react';
import CartBtn from '../CartBtn';
import CartTotal from '../CartTotal';
import Delivery from '../Delivery';
import Gift from '../Gift';
import CartTable from '../CartTable';
import Header from '../Header';

const Cart = () => {

    return (
        <React.Fragment>
            <Header/>
            <CartTable/>
            <Delivery/>
            <Gift/>
            <CartTotal/>
            <CartBtn/>
        </React.Fragment>
    );

}

export default Cart;