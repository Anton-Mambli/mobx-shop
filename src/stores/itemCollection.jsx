import {observable, action, computed} from "mobx";

export default class ItemCollection {


    @observable
    data = []

    constructor(data) {
        this.data = data || [];
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
    setData = () => {
    }

    @action
    clearCart = (store) => {
        store.data = [];
    }

    @action
    remove = () => {
    }

    @action
    addToCart = (id, store) => {
        const target = this.data.findIndex(item => item.id === id);

        if (store.data.find(item => item.id === id)) {
            store.data[id].count += 1;
        } else {
            store.data.push(this.data[target]);

        }
    }


    @action
    increaseItemCount = (id) => {
        const target = this.data.findIndex(item => item.id === id);
        this.data[target].count += 1;
    }

    @action
    decreaseItemCount = (id) => {
        const target = this.data.findIndex(item => item.id === id);
        this.data[target].count -= 1;
    }
}