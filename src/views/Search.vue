<template>
  <div class="d-flex flex-column justify-space-between search-page">
    <div class="d-flex flex-column">
      <p class="white--text headline-5 regular ma-0">Search</p>
      <TextField
        v-model="keyword"
        :handleKeyDown="handleKeyDown"
        customStyle="margin: 20px 0 0 0"
      />
      <v-divider
        v-if="$vuetify.breakpoint.smAndUp"
        style="margin: 30px 0"
        dark
      />
      <p
        class="white--text headline-5 regular mx-0 mb-0"
        :class="{
          'mt-0': $vuetify.breakpoint.smAnd,
          'mt-7': !$vuetify.breakpoint.smAndUp,
        }"
      >
        {{ limitPerPage }} Of Results Per Page
      </p>
      <div style="margin: 20px 0 30px 0" class="d-flex flex-row align-end">
        <p class="white--text headline-3 bold ma-0">
          {{ total || "#" }}
          <span class="white--text subtitle-ubuntu-1 regular"> results </span>
        </p>
      </div>
      <Slider @onChange="limitPerPage = $event" />
      <v-divider style="margin: 30px 0" dark />
    </div>
    <div class="button-position">
      <NormalButton :onClick="handleClick" text="Search" />
    </div>
  </div>
</template>

<script>
const NormalButton = () => import("@/components/Button/Normal");
const TextField = () => import("@/components/Input/TextField");
const Slider = () => import("@/components/Slider/Slider");

export default {
  components: {
    NormalButton,
    TextField,
    Slider,
  },
  data() {
    return {
      keyword: null,
      total: 30,
      limitPerPage: 3,
    };
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: "Results",
        query: {
          pageSize: this.limitPerPage,
          keyword: this.keyword,
        },
      });
    },
    handleKeyDown(e) {
      if (e?.keyCode === 13) this.handleClick();
    },
  },
  watch: {
    limitPerPage(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.search-page {
  height: 80vh;
  margin: 54px 120px 87px 120px;
}

.button-position {
  width: 343px;
}

@media only screen and (max-width: 600px) {
  .search-page {
    height: calc(88vh - 71px);
    margin: 0 20px;
  }

  .button-position {
    width: 100%;
  }
}
</style>
