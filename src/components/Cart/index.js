import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SingleTableRow from '../TableRow';
import CartBtn from '../CartBtn';
import {observer} from 'mobx-react';
import CartTotal from '../CartTotal';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Delivery from '../Delivery';
import Gift from '../Gift';

const Cart = props => {
    const cartsList = props.store.cartList;
    return (
        <React.Fragment>
            <h2 className="title">Корзина <Badge badgeContent={props.store.totalCartCount} color="primary">
                <ShoppingCartIcon/>
            </Badge>
            </h2>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Фото</TableCell>
                            <TableCell>Наименование</TableCell>
                            <TableCell>Цена</TableCell>
                            <TableCell>Количество</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartsList.map((item, index) => (
                            <SingleTableRow {...item} key={index} increase={props.store.increaseCountCart} decrease={props.store.decreaseCountCart}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Delivery type = {props.store.selectedDeliveryType} onChange = {props.store.toggleDeliveryType} />
            <Gift type = {props.store.selectedGiftType} onChange = {props.store.toggleGiftType} />
            <CartTotal totalCartSum={props.store.totalCartSum}/>
            <CartBtn onClear={props.store.clearCart} onSend={props.store.sendCart}/>
        </React.Fragment>
    );

}

export default observer(Cart);