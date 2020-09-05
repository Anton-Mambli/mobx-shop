import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { cartCollection } from '../../stores/store';

const SingleTableRow = props => {
    const { id, name, count, price, img } = props;
    return (
        <TableRow>
            <TableCell>
                <img src={require(`../../pic/${img}`)} alt="" />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{count}</TableCell>
            <TableCell>
                <HighlightOffIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => cartCollection.removeItem(id)}
                />
            </TableCell>
        </TableRow>
    );
};

export default SingleTableRow;
