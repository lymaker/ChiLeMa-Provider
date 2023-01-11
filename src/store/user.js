import {defineStore} from 'pinia';
import {createApi, selectApi, updateApi} from '@/api/user.js';
import {getStorage, setStorage} from '@/util/storage.js';

const userStorageName = 'user';
const userStorage = getStorage(userStorageName);

export const useUserStore = defineStore('useUserStore', {
    state() {
        return userStorage || {
            user: {
                id: null,
                nickname: null,
                username: null,
                phone: null,
                email: null,
                avatarImageUrl: null,
                money: null,
                registerTime: null
            }
        };
    },
    actions: {
        async create(param) {
            await createApi(param);
        },
        async select() {
            const {data} = await selectApi();
            this.user = data;
            setStorage(userStorageName, this.$state);
        },
        async update(param) {
            await updateApi(param);
            await this.select();
        }
    }
});