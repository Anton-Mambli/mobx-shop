import {observable, action, computed} from "mobx";
import ear01 from '../pic/ear-01.jpg'
import ear02 from '../pic/ear-02.jpg'
import ear03 from '../pic/ear-03.jpg'

import mouse01 from '../pic/mouse-01.jpg'
import mouse02 from '../pic/mouse-02.jpg'
import mouse03 from '../pic/mouse-03.jpg'

import keyboard01 from '../pic/keyboard-01.jpg'
import keyboard02 from '../pic/keyboard-02.jpg'
import keyboard03 from '../pic/keyboard-03.jpg'

class Store {
    @observable
    goodsList = [
        {
            id:    0,
            img:   ear01,
            name:  'Нашники 1',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        },
        {
            id:    1,
            img:   ear02,
            name:  'Нашники 2',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        }, {
            id:    2,
            img:   ear03,
            name:  'Нашники 3',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        },
        {
            id:    3,
            img:   mouse01,
            name:  'Мышака 1',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        },
        {
            id:    4,
            img:   mouse02,
            name:  'Мышака 2',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        }, {
            id:    5,
            img:   mouse03,
            name:  'Мышака 3',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        },
        {
            id:    6,
            img:   keyboard01,
            name:  'Клавиатура 1',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        },
        {
            id:    7,
            img:   keyboard02,
            name:  'Клавиатура 2',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        }, {
            id:    8,
            img:   keyboard03,
            name:  'Клавиатура 3',
            cost:  Math.floor(500 + Math.random() * (5000 + 1 - 500)),
            count: 1
        }

    ];
    @observable
    cartList  = [];
    @observable
    selectedDeliveryType = 'Почтой';
    @observable
    selectedGiftType = 'Флешка';

    @computed
    get deliveryType() {
        return this.selectedDeliveryType;
    }

    @computed
    get giftType() {
        return this.selectedGiftType;
    }
    @action
    toggleDeliveryType = id => {
        this.selectedDeliveryType = id;
    }
    @action
    toggleGiftType = id => {
        this.selectedGiftType = id;
    }
    @action
    clearCart     = () => {
        this.cartList = [];
    }
    @action
    increaseCount = id => {
        const target = this.goodsList.findIndex(item => item.id === id);
        this.goodsList[target].count += 1;
    }

    @action
    decreaseCount     = id => {
        const target = this.goodsList.findIndex(item => item.id === id);
        if (this.goodsList[target].count > 1) {
            this.goodsList[target].count -= 1
        }
    }
    @action
    increaseCountCart = id => {
        const target = this.cartList.findIndex(item => item.id === id);
        this.cartList[target].count += 1;
    }

    @action
    decreaseCountCart = id => {
        const target = this.cartList.findIndex(item => item.id === id);
        if (this.cartList[target].count > 1) {
            this.cartList[target].count -= 1
        } else {
            this.cartList = this.cartList.filter(item => item.id !== id);
        }
    }
    @action
    addToCart         = id => {
        const target = this.goodsList.findIndex(item => item.id === id);

        if (this.cartList.find(item => item.id === id)) {
            this.cartList[id].count += 1;
        } else {
            this.cartList.push(this.goodsList[target]);
        }
    }
    @action
    sendCart = () => {
        let orderedGoods = [];
        this.cartList.forEach(item => orderedGoods.push({name: item.name, count: item.count}))
        let OrderedGoodsString = 'Были заказаны следующие товары:\n'
        orderedGoods.forEach(item => OrderedGoodsString += `${item.name} в количестве ${item.count} шт.\n`);
        OrderedGoodsString += `Выбранный тип доставки: ${this.selectedDeliveryType} \n`
        OrderedGoodsString += `Выбранный подарок: ${this.selectedGiftType} \n`
        alert(OrderedGoodsString);
        this.clearCart();
    }
    @computed
    get totalCartSum() {
        let totalSum = 0;
        this.cartList.forEach(item => totalSum += item.cost * item.count);
        return totalSum;
    }
    @computed
    get totalCartCount() {
        return this.cartList.length;
    }
}

const appStore = new Store();
export default appStore;
