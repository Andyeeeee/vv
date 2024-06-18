<template>

  <div id="store" style="text-align: center;">
    <h1>點數商城</h1>


    <v-row style="padding: 0 10%;">
      <v-col class="v-col-12 v-col-sm-6" v-for="item in items" :key="item.to">
        <div class="text-box" :title="item.title" :text="item.text"
          :style="{ 'background-image': `url(${item.image})` }" style="background-size: cover;
      background-position: center;  filter: brightness(80%);  z-index: -1;">
          <div style="z-index: 0">

            {{ item.title }}
          </div>
        </div>
      </v-col>
    </v-row>


    <!-- 月曆 狀態2點選
   紅字注意事項
    -->

  </div>

  <img src="" alt="">
</template>
<script setup>


import { computed } from 'vue'

const items = computed(() => {
  return [
    { to: '/', image: '', title: '唱歌 ', text: '唱歌 ', image: '/src/assets/sing.jpg' },
    { to: '/', image: '', title: '泡湯', text: '泡湯', image: '/src/assets/spa.jpg' },
    { to: '/', image: '', title: '健身房 ', text: '健身房 ', image: '/src/assets/gym.jpg' },
    { to: '/', image: '', title: '娛樂室', text: '娛樂室', image: '/src/assets/fun.jpg' },
  ]
})

</script>