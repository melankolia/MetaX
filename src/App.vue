<template>
  <v-app style="background-color: #121212">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
