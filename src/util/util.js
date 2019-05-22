let local = {
    save(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    fetch(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },
    removeItem(key) {
        window.localStorage.removeItem(key);
    }
}

export default {
    install: function(vm, options) {
        vm.prototype.$local = local;
    }
}