<template>

  <section id="home-announcement" style="text-align: center;margin: auto;">
    <h1>社區公告</h1>
    <table style="width: 100%;padding: 0 5%">
      <thead style="background-color: burlywood;">
        <tr>
          <th style="width:20%;">日期</th>
          <th style="width:60%;">標題</th>
          <th style="width:20%;">分類</th>
        </tr>
      </thead>
      <tbody style="background-color:bisque;">
        <tr v-for="item in items" :key="item.date">
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.kind }}</td>
        </tr>

      </tbody>
    </table>

  </section>

</template>

<script setup>

import { computed } from 'vue'

const items = computed(() => {
  return [
    { date: '10-5', title: '抬頭', kind: '一班' },
    { date: '10-5', title: '抬頭', kind: '一班' },
    { date: '10-5', title: '抬頭', kind: '一班' }
  ]
})

console.log();

</script>
