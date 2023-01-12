<template>
  <div class="layout">
    <main>
      <router-view />
    </main>
    <van-tabbar
      v-model="active"
      class="tabbar"
    >
      <van-tabbar-item
        v-for="(item, index) in nav"
        :key="index"
        :icon="item.icon"
        :to="item.path"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();

const nav = [
  {
    path: '/work',
    title: '工作',
    icon: 'service-o',
  },
  {
    path: '/data',
    title: '数据',
    icon: 'chart-trending-o',
  },
  {
    path: '/store',
    title: '店铺',
    icon: 'home-o',
  },
  {
    path: '/my',
    title: '我的',
    icon: 'user-o',
  }
];
let active = $ref(nav.findIndex(e => route.matched[1].path === e.path));
</script>

<style lang="less" scoped>
@import "@/index.less";

.layout {

  main {
    height: @layout-main;
    padding: @basic-view-padding-y @basic-view-padding-x;
    background: @basic-background-color;
    box-sizing: border-box;
  }

  .tabbar {
    position: relative;
  }

}
</style>