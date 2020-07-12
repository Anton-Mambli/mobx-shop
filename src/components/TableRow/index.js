import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';


const SingleTableRow = props => {
    const {id, name, count, cost, img} = props;
    return (
        <TableRow>
            <TableCell><img src={img} alt=""/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{cost}</TableCell>
            <TableCell>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => props.decrease(id)}>
                        -
                    </Button>
                    {count}
                    <Button size="small" color="primary" onClick={() => props.increase(id)}>
                        +
                    </Button>
                </CardActions>
            </TableCell>
        </TableRow>

    );

}

export default SingleTableRow;