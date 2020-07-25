import React from 'react';
import './sass/project.sass'
import Cart from './components/Cart';
import Catalog from './components/Catalog';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="cart">
                    <Cart/>
                </div>
                <div className="catalog">
                    <Catalog />
                </div>
            </div>
        </div>
    );
}

export default App;
