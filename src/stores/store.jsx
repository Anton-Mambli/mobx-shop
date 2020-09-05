import goodsData from './goods.json';
import { observable } from 'mobx';

class Item {
    constructor(id, img, name, price, count, disabled) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.disabled = disabled;
    }
    @observable
    count = 1;
    getPrice = () => this.price;
}

class Collection {
    constructor(list, cart) {
        this.list = list;
        this.cart = cart;
    }

    getItem = id => {
        return this.list.find(item => item.id === id);
    };
    addItem = (id, count) => {
        this.cart.addItem(this.getItem(id), count);
    };
}

class Cart {
    constructor(list) {
        this.list = list;
    }

    @observable
    list = [];
    getItem = id => {
        return this.list.find(item => item.id === id);
    };
    addItem = (item, count) => {
        if (this.list.find(goods => goods.id === item.id) === undefined) {
            item['count'] = count;
            this.list.push(item);
            console.log('Новый');
        } else {
            console.log(this.getItem(item.id));
            this.getItem(item.id).count += count;
        }
    };
    getCartLength = () => this.list.length;
    getCartSum = () => {
        this.list.reduce((acc, item) => {
            return acc + item.getPrice();
        }, 0);
    };
    removeItem = id => {
        this.list = this.list.filter(item => item.id !== id);
    };
}

//------------------------------------------------------------------------------
const goodsList = goodsData.map(
    item => new Item(item.id, item.img, item.name, item.price, item.disabled)
);
export const cartCollection = new Cart([]);
export const goodsCollection = new Collection(goodsList, cartCollection);
