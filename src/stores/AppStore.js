import { observable } from 'mobx';

const appStore = observable({
    focusedIndex: 0,
    counter: 0,
    searchString: '',
})

appStore.incrementCounter = function () { ++this.counter }
appStore.decrementCounter = function () { --this.counter }
appStore.resetCounter     = function () { this.counter = 0 }

export default appStore;