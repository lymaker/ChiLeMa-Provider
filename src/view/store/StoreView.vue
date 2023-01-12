<template>
  <div>
    <div class="container">
      <van-tabs
        v-model:active="activeName"
        class="tabs"
      >
        <van-tab
          v-for="(item, index) in tabs"
          :key="index"
          :name="item.name"
          :title="item.title"
          :to="{name: item.name}"
        />
      </van-tabs>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>

import {useRoute} from 'vue-router';

const route = useRoute();

const tabs = [
  {
    name: 'store-child',
    title: '店铺',
  },
  {
    name: 'category-child',
    title: '分类',
  },
  {
    name: 'commodity-child',
    title: '商品',
  },
  {
    name: 'comment-child',
    title: '评价',
  }
];

// 有些浏览器不支持at函数
const activeName = $ref(route.matched[route.matched.length - 1].name || tabs[tabs.length - 1].name);
</script>

<style lang="less" scoped>
@import "@/index.less";

.container {
  height: 100%;

  .tabs {
    margin-bottom: 10px;
  }

  main {
    //background-color: #FFF;
    //height: calc(@layout-main - (@basic-view-padding-y * 2) - var(--van-tabs-line-height) - 10px);
    box-sizing: border-box;
  }

}
</style>