import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import SingleTableRow from '../TableRow';
import Table from '@material-ui/core/Table';
import appStore from '../../stores/store';
import {observer} from 'mobx-react';

const CartTable = () => {
    const cartsList = appStore.cartList;
    console.log(cartsList);
    return (
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
                        <SingleTableRow {...item} key={index} increase={appStore.increaseCountCart} decrease={appStore.decreaseCountCart}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default observer(CartTable);
