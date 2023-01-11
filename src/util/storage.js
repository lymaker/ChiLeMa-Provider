import store from 'store2';

const isSessionName = 'is-session';
let isSession = !store.set(isSessionName, true, false);

export function getStorage(key) {
    if (!key) return false;
    return isSession ? store.session(key) : store.local(key);
}

export function setStorage(key, value) {
    if (!value) return false;
    isSession ? store.session(key, value) : store.local(key, value);
}

export function clear() {
    store.clearAll();
}

export function setStoragePlace(value) {
    if (value !== isSession) {
        store(isSessionName, value);
        isSession = value;
        if (isSession) {
            // 将localStorage数据转移至sessionStorage
            for (let key in store.local.getAll()) {
                if (key !== isSessionName) {
                    store.session(key, store.local(key));
                    store.local.remove(key);
                }
            }
        } else {
            for (let key in store.session.getAll()) {
                store.local(key, store.session(key));
                store.session.remove(key);
            }
        }
    }
}