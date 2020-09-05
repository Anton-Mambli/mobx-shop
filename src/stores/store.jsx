import goodsData from './goods.json';
import { action, observable } from 'mobx';

class BonusType {
    constructor(type) {
        this.type = type;
    }

    @observable
    type = '';
    @action
    changeType = newType => {
        this.type = newType;
    };
}

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
    constructor(list, deliveryBonus, giftBonus) {
        this.list = list;
        this.deliveryBonus = deliveryBonus;
        this.giftBonus = giftBonus;
    }

    @observable
    list = [];
    @observable
    totalSum = 0;
    getItem = id => {
        return this.list.find(item => item.id === id);
    };
    addItem = (item, count) => {
        if (this.list.find(goods => goods.id === item.id) === undefined) {
            item['count'] = count;
            this.list.push(item);
        } else {
            this.getItem(item.id).count += count;
        }
        this.getCartSum();
    };
    getCartLength = () => this.list.length;
    getCartSum = () => {
        this.totalSum = this.list.reduce((acc, item) => {
            return acc + item.getPrice() * item.count;
        }, 0);
    };
    removeItem = id => {
        this.list = this.list.filter(item => item.id !== id);
        this.getCartSum();
    };
    clearCart = () => {
        this.list = [];
        this.getCartSum();
    };
    sendCart = () => {
        let orderedGoods = [];
        this.list.forEach(item =>
            orderedGoods.push({ name: item.name, count: item.count })
        );
        let OrderedGoodsString = 'Были заказаны следующие товары:\n';
        orderedGoods.forEach(
            item =>
                (OrderedGoodsString += `${item.name} в количестве ${item.count} шт.\n`)
        );
        OrderedGoodsString += `Выбранный тип доставки: ${this.deliveryBonus.type} \n`;
        OrderedGoodsString += `Выбранный подарок: ${this.giftBonus.type} \n`;
        alert(OrderedGoodsString);
        this.clearCart();
    };
}

//------------------------------------------------------------------------------
const goodsList = goodsData.map(
    item => new Item(item.id, item.img, item.name, item.price, item.disabled)
);
export const deliveryBonus = new BonusType('Почтой');
export const giftBonus = new BonusType('Флешка');
export const cartCollection = new Cart([], deliveryBonus, giftBonus);
export const goodsCollection = new Collection(goodsList, cartCollection);
