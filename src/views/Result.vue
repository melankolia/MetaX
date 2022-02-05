<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row results-top align-center">
      <img
        class="chevron-back mr-8"
        src="@/assets/chevron-back.png"
        width="13"
        height="22"
        @click="handleBack"
        v-if="$vuetify.breakpoint.smAndUp"
      />
      <p class="white--text headline-4 regular ma-0">Results</p>
    </div>
    <div
      class="d-flex flex-column flex-sm-row justify-space-between flex-wrap container-card"
    >
      <ResultCard v-for="item in 9" :key="item" />
      <div class="normal-button-width mb-12">
        <NormalButton text="More" />
      </div>
    </div>
  </div>
</template>

<script>
const NormalButton = () => import("@/components/Button/Normal");
const ResultCard = () => import("@/components/Cards/ResultCard");

export default {
  components: {
    NormalButton,
    ResultCard,
  },
  methods: {
    handleBack() {
      this.$router.replace({
        name: "Home",
      });
    },
  },
};
</script>

<style scoped>
.results-top {
  margin: 92px 86px 24px 86px;
}

.container-card {
  margin: 24px 130px 0 130px;
}

@media only screen and (max-width: 600px) {
  .results-top {
    margin: 20px 20px 0px 20px;
  }

  .container-card {
    margin: 24px 20px 0 20px;
  }
}

.normal-button-width {
  width: 343px;
}

.chevron-back:hover {
  cursor: pointer;
}
</style>
