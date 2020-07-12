import React from 'react';
import './sass/project.sass'
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import appStore from './stores/store'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="cart">
                    <Cart store={appStore}/>
                </div>
                <div className="catalog">
                    <Catalog store={appStore}/>
                </div>
            </div>
        </div>
    );
}

export default App;
