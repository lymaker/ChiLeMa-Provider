<template>
  <div>
    <div class="container">
      <van-divider>预览</van-divider>
      <store-preview-component />
      <van-divider>店铺信息</van-divider>
      <van-cell-group inset>
        <van-cell
          is-link
          title="名称"
        />
        <van-cell
          is-link
          title="介绍"
        />
        <van-cell
          is-link
          title="类别"
        />
        <van-cell
          is-link
          title="起送"
        />
        <van-cell
          is-link
          title="店铺地址"
        />
        <van-cell
          is-link
          title="店铺封面"
        />
        <van-cell
          is-link
          title="背景图片"
        />
        <van-cell
          is-link
          title="营业时间"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import StorePreviewComponent from '@/view/store/child/component/StorePreviewComponent.vue';
</script>

<style lang="less" scoped>
.container {

  :deep(.van-cell-group--inset) {
    margin: 0;
  }

}
</style>