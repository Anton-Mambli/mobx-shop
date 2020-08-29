import {observable, action, computed} from "mobx";

export default class ItemCollection {


    @observable
    data                 = []
    @observable
    selectedDeliveryType = '';
    @observable
    selectedGiftType     = '';

    constructor(data, selectedDeliveryType, selectedGiftType) {
        this.data                 = data || [];
        this.selectedDeliveryType = selectedDeliveryType || 'Почтой';
        this.selectedGiftType     = selectedGiftType || 'Флешка'
    }


    @computed
    get length() {
        return this.data.length
    }

    @computed
    get totalSym() {
        let totalSum = 0;
        this.data.forEach(item => totalSum += item.cost * item.count);
        return totalSum;
    }


    @action
    changeGift     = gift => {
        this.selectedGiftType = gift;
    }
    @action
    changeDelivery = type => {
        this.selectedDeliveryType = type;
    }
    @action
    clearCart      = (store) => {
        store.data = [];
    }

    @action
    sendCart = (store) => {
        let orderedGoods = [];
        this.data.forEach(item => orderedGoods.push({name: item.name, count: item.count}))
        let OrderedGoodsString = 'Были заказаны следующие товары:\n'
        orderedGoods.forEach(item => OrderedGoodsString += `${item.name} в количестве ${item.count} шт.\n`);
        OrderedGoodsString += `Выбранный тип доставки: ${this.selectedDeliveryType} \n`
        OrderedGoodsString += `Выбранный подарок: ${this.selectedGiftType} \n`
        alert(OrderedGoodsString);
        this.clearCart(store);
    }

    @action
    addToCart = (id, fromStore, toStore) => {
        const target = fromStore.data.findIndex(item => item.id === id);
        const position = {...fromStore.data[target]}
        if (toStore.data.find(item => item.id === id)) {
            toStore.data[id].count += 1;
        } else {
            toStore.data.push(position);
            fromStore.data[id].disabled = true;
        }
    }


    @action
    increaseItemCount = (id, store) => {
        const target = store.data.findIndex(item => item.id === id);
        store.data[target].count += 1;
    }

    @action
    decreaseItemCount = (id, store) => {
        const target = this.data.findIndex(item => item.id === id);
        if (store.data[target].count > 0) {
            store.data[target].count -= 1;
        } else {
            store.data[target].count = 0;
        }


    }
}