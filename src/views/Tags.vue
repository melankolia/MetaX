<template>
  <div class="d-flex flex-column tags-container">
    <p class="white--text headline-4 regular mb-6">Tags</p>
    <div class="d-flex flex-row flex-wrap justify-space-between">
      <TagCard v-for="item in 20" :key="item" />
    </div>
  </div>
</template>

<script>
const TagCard = () => import("@/components/Cards/TagCard");

export default {
  components: {
    TagCard,
  },
  methods: {
    handleBack() {
      this.$router.replace({
        name: "Search",
      });
    },
  },
};
</script>

<style scoped>
.tags-container {
  margin: 80px 257px 24px 257px;
}

@media only screen and (max-width: 600px) {
  .tags-container {
    margin: 20px 25px 0px 25px;
  }
}

.normal-button-width {
  width: 343px;
}
</style>
