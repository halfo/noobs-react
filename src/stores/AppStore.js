import { observable } from 'mobx';

const appStore = observable({
    focusedIndex: 0,
})

export default appStore;