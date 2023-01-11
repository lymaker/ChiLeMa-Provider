import {defineStore} from 'pinia';
import {clear, getStorage, setStorage, setStoragePlace} from '@/util/storage.js';
import {checkApi, loginApi, logoutApi} from '@/api/auth.js';

const authStorageName = 'auth';
const authStorage = getStorage(authStorageName);

export const useAuthStore = defineStore('useAuthStore', {
    state() {
        return authStorage || {
            token: null
        };
    },
    actions: {
        async login({username, password, isRemember}) {
            setStoragePlace(!isRemember);
            const {headers} = await loginApi({username, password, role: 'provider'});
            this.token = headers['clm-token'];
            setStorage(authStorageName, this.$state);
        },
        async logout() {
            await logoutApi();
            this.$reset();
            clear();
        },
        async check() {
            try {
                await checkApi();
                return true;
            } catch (e) {
                return false;
            }
        }
    }
});