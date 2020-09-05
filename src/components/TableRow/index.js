import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import cartStore from '../../stores/cartStore';
import goodStore from '../../stores/goodsStore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const SingleTableRow = props => {
    const { id, name, count, price, img } = props;
    return (
        <TableRow>
            <TableCell>
                <img src={require(`../../pic/${img}`)} alt="" />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>
                <CardActions>
                    <Button size="small" color="primary">
                        -
                    </Button>
                    {count}
                    <Button size="small" color="primary">
                        +
                    </Button>
                </CardActions>
            </TableCell>
            <TableCell>
                <HighlightOffIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        cartStore.deleteFromList(id, goodStore, cartStore)
                    }
                />
            </TableCell>
        </TableRow>
    );
};

export default SingleTableRow;
