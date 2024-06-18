<template>


  <div id="movie" class="text-center w-100">
    <h1>點影時刻表</h1>
    <div class="movie-box" v-for="movie in movies">
      <div class="left-box w-auto">
        <img src="/src/assets/movie.jpg" alt="" class="movie-pic">
      </div>
      <div class="right-box">
        <div class="name">name{{ movie.name }}</div>
        <div class="time">time{{ movie.time }}</div>
        <div class=""><img src="/src/assets/movieLevel.png" alt="" class="level">{{ movie.level }}</div>
      </div>
    </div>

  </div>

</template>
<script setup>


import { computed } from 'vue'

const movies = computed(() => {
  return [
    { pic: '圖片', name: '名', time: '時', level: '' },
    { pic: '圖片', name: '名', time: '時', level: '' }
  ]
})
</script>