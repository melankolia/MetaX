<template>
  <div class="d-flex navbar-mobile py-7 pl-5">
    <p v-if="!currentMeta" class="logo white--text ma-0">LOGO</p>
    <div v-else class="d-flex align-center">
      <img
        class="chevron-back mr-7"
        src="@/assets/chevron-back.png"
        width="13"
        height="22"
        @click="handleBack"
      />
      <p class="white--text headline-5 mb-0">{{ currentMeta }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.replace({ name: "Home" });
    },
  },
  computed: {
    currentMeta() {
      return this.$route.meta?.group;
    },
  },
};
</script>

<style scoped>
.navbar-mobile {
  position: sticky;
  top: 0;
  background-color: #181818;
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
</style>
