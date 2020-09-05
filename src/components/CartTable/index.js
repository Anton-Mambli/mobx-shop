import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import SingleTableRow from '../TableRow';
import Table from '@material-ui/core/Table';
import { observer } from 'mobx-react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { cartCollection } from '../../stores/store';

const CartTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Фото</TableCell>
                        <TableCell>Наименование</TableCell>
                        <TableCell>Цена</TableCell>
                        <TableCell>Количество</TableCell>
                        <TableCell>
                            <MoreHorizIcon />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartCollection.list.map((item, index) => {
                        return <SingleTableRow {...item} key={index} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default observer(CartTable);
