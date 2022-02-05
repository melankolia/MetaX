<template>
  <v-navigation-drawer app permanent class="navbar_color" width="375px" right>
    <v-tabs
      v-model="tab"
      height="65px"
      background-color="navbar_color"
      dark
      grow
      class="mb-9"
    >
      <v-tab v-for="item in items" :key="item">
        <p class="mb-n4">{{ item }}</p>
      </v-tab>
    </v-tabs>
    <div class="d-flex-column px-4 container-friend">
      <Friend :data="index" v-for="index in 20" :key="index" />
    </div>
  </v-navigation-drawer>
</template>

<script>
const Friend = () => import("@/components/Friends/Friend");

export default {
  components: {
    Friend,
  },
  data() {
    return {
      tab: null,
      items: ["Followers", "Following"],
    };
  },
};
</script>

<style scoped>
.container-friend {
  overflow: scroll;
  height: calc(100vh - 100px);
}
</style>
