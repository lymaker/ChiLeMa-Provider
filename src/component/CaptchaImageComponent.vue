<template>
  <div>
    <div class="container">
      <van-image
        class="image"
        fit="fill"
        :src="src"
        @click="flushCaptcha"
      />
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import {generate} from '@/api/captcha.js';

const props = defineProps({
  type: {
    type: String,
    required: true
  }
});

let src = $ref(null);
let taskFuncId = $ref(null);

onMounted(async () => {
  await flushCaptcha();
});

async function flushCaptcha() {
  clearInterval(taskFuncId);
  const {data} = await generate(props.type);
  const duration = data.duration;
  src = data.image;
  taskFuncId = setInterval(flushCaptcha, duration * 1000);
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;

  .image {
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
}
</style>