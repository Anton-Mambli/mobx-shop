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
    clearCart      = (goodsStore, cartStore) => {
        cartStore.data = [];
        goodsStore.data.forEach(item => item.disabled = false)
    }

    @action
    sendCart = (goodsStore, cartStore) => {
        let orderedGoods = [];
        cartStore.data.forEach(item => orderedGoods.push({name: item.name, count: item.count}))
        let OrderedGoodsString = 'Были заказаны следующие товары:\n'
        orderedGoods.forEach(item => OrderedGoodsString += `${item.name} в количестве ${item.count} шт.\n`);
        OrderedGoodsString += `Выбранный тип доставки: ${this.selectedDeliveryType} \n`
        OrderedGoodsString += `Выбранный подарок: ${this.selectedGiftType} \n`
        alert(OrderedGoodsString);
        this.clearCart(goodsStore, cartStore);
    }

    @action
    addToCart = (id, goodsStore, cartStore) => {
        const target = goodsStore.data.findIndex(item => item.id === id);
        const position = {...goodsStore.data[target]}
        if (cartStore.data.find(item => item.id === id)) {
            cartStore.data[id].count += 1;
        } else {
            cartStore.data.push(position);
            goodsStore.data[id].count = 1;
            goodsStore.data[id].disabled = true;
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
        if (store.data[target].count > 1) {
            store.data[target].count -= 1;
        } else {
            store.data[target].count = 1;
        }


    }
    @action
    deleteFromList = (id, goodsStore, cartStore) => {
        const filteredArray = cartStore.data.filter(item => item.id !== id)
        cartStore.data = filteredArray;
        goodsStore.data[id].disabled = false;
    }
}