<template>
  <v-navigation-drawer
    app
    permanent
    class="navbar_color navbar-style"
    width="80px"
  >
    <div style="height: 100%" class="d-flex flex-column align-center">
      <p class="logo white--text">LOGO</p>
      <v-list nav style="transition: all 0.7s" class="text-center">
        <v-list-item
          style="margin-bottom: 22px"
          v-for="item in items"
          :key="item.url"
          :to="item.url"
        >
          <template #default="{ active }">
            <div
              style="height: 24px; width: 24px"
              class="d-flex flex-column align-center"
            >
              <img
                :class="{ opacity: !active }"
                width="20px"
                height="20px"
                src="@/assets/logo-item.png"
              />
              <p v-show="active" class="ma-0 caption">{{ item.title }}</p>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
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
};
</script>

<style scoped>
.navbar-style {
  padding: 37px 22px 0px 23px;
}

.logo {
  background: linear-gradient(270deg, #ffd25f 0.13%, #ff5c01 100%);
  font-family: "Ubuntu", sans-serif !important;
  font-size: 13px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 15px;
  letter-spacing: -0.05em;
  text-align: left;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.opacity {
  opacity: 0.2;
}
</style>
