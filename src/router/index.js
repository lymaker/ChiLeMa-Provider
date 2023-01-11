import {createRouter, createWebHashHistory} from 'vue-router';
import LayoutDefault from '@/layout/default/LayoutDefault.vue';
import WorkView from '@/view/work/WorkView.vue';
import StoreView from '@/view/store/StoreView.vue';
import DataView from '@/view/data/DataView.vue';
import MyView from '@/view/my/MyView.vue';
import {useAuthStore} from '@/store/auth.js';
import LoginView from '@/view/login/LoginView.vue';
import StoreChild from '@/view/store/child/StoreChild.vue';
import CategoryChild from '@/view/store/child/CategoryChild.vue';
import CommodityChild from '@/view/store/child/CommodityChild.vue';
import CommentChild from '@/view/store/child/CommentChild.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/work',
        component: LayoutDefault,
        children: [
            {
                path: 'work',
                name: 'work',
                component: WorkView
            },
            {
                path: 'store',
                name: 'store',
                component: StoreView,
                children: [
                    {
                        path: 'default',
                        name: 'store-child',
                        component: StoreChild
                    },
                    {
                        path: 'category',
                        name: 'category-child',
                        component: CategoryChild
                    },
                    {
                        path: 'commodity',
                        name: 'commodity-child',
                        component: CommodityChild
                    },
                    {
                        path: 'comment',
                        name: 'comment-child',
                        component: CommentChild
                    },
                ]
            },
            {
                path: 'data',
                name: 'data',
                component: DataView
            },
            {
                path: 'my',
                name: 'my',
                component: MyView
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

/**
 * 路由拦截
 */
router.beforeEach(to => {
    const authStore = useAuthStore();
    if (to.name !== 'login' && !authStore.token) {
        return {
            name: 'login'
        };
    }
});

export default router;