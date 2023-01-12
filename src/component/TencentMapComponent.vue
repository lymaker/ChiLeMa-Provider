<template>
  <div>
    <div
      id="tencent-map"
      class="container"
    />
  </div>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
  const center = new TMap.LatLng(38.984120, 116.307484);
  const map = new TMap.Map(document.getElementById('tencent-map'), {
    center: center,//设置地图中心点坐标
    zoom: 17.2,   //设置地图缩放级别
    viewMode:'2D'
  });
});
</script>

<style scoped>

</style>