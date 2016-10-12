import { observable } from 'mobx';

const appStore = observable({
    focused: 0,
})

appStore.getFocusedIndex = function () {
    return this.focused;
};

appStore.setFocusedIndex = function (focused) {
    this.focused = focused;
};

export default appStore;