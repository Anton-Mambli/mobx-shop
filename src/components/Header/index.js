import React from 'react';
import Badge from '@material-ui/core/Badge';
import appStore from '../../stores/store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {observer} from 'mobx-react';

const Header = () => {
    return (
        <h2 className="title">Корзина <Badge badgeContent={appStore.totalCartCount} color="primary">
            <ShoppingCartIcon/>
        </Badge>
        </h2>
    );
};

export default observer(Header);
