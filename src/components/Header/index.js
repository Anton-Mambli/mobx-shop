import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { observer } from 'mobx-react';
import { cartCollection } from '../../stores/store';

const Header = () => {
    return (
        <h2 className="title">
            Корзина
            <Badge
                badgeContent={cartCollection.getCartLength()}
                color="primary"
            >
                <ShoppingCartIcon />
            </Badge>
        </h2>
    );
};

export default observer(Header);
