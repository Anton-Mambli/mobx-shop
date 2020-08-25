import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import SingleTableRow from '../TableRow';
import Table from '@material-ui/core/Table';
import {observer} from 'mobx-react';
import cartStore from '../../stores/cartStore';

const CartTable = () => {
    console.log(cartStore.data);
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
                    {cartStore.data.map((item, index) => (
                        <SingleTableRow {...item} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default observer(CartTable);
