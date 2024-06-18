<template>
  <div id="fornt-layoutw">


    <section id="title-pic" class="text-center ">世界灣
    </section>

    <v-main>

      <router-view />
    </v-main>

    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation color="primary">
        <v-btn to="/">
          <v-icon>mdi-history</v-icon>

          首頁
        </v-btn>

        <v-btn to="movie">
          <v-icon>mdi-heart</v-icon>

          電影時刻
        </v-btn>

        <v-btn to="Store">
          <v-icon>mdi-map-marker</v-icon>

          <span>點數兌換</span>
        </v-btn>
        <v-btn to="login">
          <v-icon>mdi-map-marker</v-icon>

          <span>會員登入</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </div>

</template>