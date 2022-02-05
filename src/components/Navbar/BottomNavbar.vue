<template>
  <v-bottom-navigation
    app
    class="navbar_color"
    active-class="icon-clipboard-active"
  >
    <div class="d-flex flex-row align-center">
      <v-btn
        v-for="item in items"
        :to="item.url"
        class="navbar_color icon-clipboard"
        :key="item.url"
      >
        <img width="24px" height="24px" src="@/assets/logo-item.png" />
      </v-btn>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: "/home",
          title: "Home",
        },
        {
          url: "/tags",
          title: "Tags",
        },
      ],
    };
  },
  watch: {
    value(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.icon-clipboard-active {
  opacity: 1 !important;
}

.icon-clipboard {
  opacity: 0.2;
}
</style>
