import React from 'react';
import Badge from '@material-ui/core/Badge';
import cartStore from '../../stores/cartStore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {observer} from 'mobx-react';

const Header = () => {
    return (
        <h2 className="title">Корзина <Badge badgeContent={cartStore.length} color="primary">
            <ShoppingCartIcon/>
        </Badge>
        </h2>
    );
};

export default observer(Header);
