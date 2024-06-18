<template>
  <v-row>
    <v-col v-for="item in items">
      <div class="box">
        <v-icon></v-icon>
      </div>
      <div class="text-box">{{ item.name }}</div>
    </v-col>
  </v-row>
</template>
<script setup>
import { computed } from 'vue';

const items = computed(() => {
  return [
    { icon: '', name: '住戶管理' },
    { icon: '', name: '信箱' }
  ]
})
</script>