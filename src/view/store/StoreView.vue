<template>
  <div>
    <div class="container">
      <van-tabs v-model:active="activeName">
        <van-tab
          v-for="(item, index) in tabs"
          :key="index"
          :name="item.name"
          :title="item.title"
          :to="{name: item.name}"
        />
      </van-tabs>
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

const activeName = $ref(route.matched.at(-1).name || tabs[-1].name);
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>