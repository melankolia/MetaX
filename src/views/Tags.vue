<template>
  <div class="d-flex flex-column tags-container">
    <p class="white--text headline-4 regular mb-6">Tags</p>
    <div class="d-flex flex-row flex-wrap justify-space-between">
      <template v-if="loading">
        <TagSkeleton v-for="item in 10" :key="item" />
      </template>
      <template v-else>
        <TagCard v-for="(item, index) in tags" :tag="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
const TagCard = () => import("@/components/Cards/TagCard");
const TagSkeleton = () => import("@/components/Skeleton/Tag");
import TagService from "@/services/resources/tag-page.service";

export default {
  components: {
    TagCard,
    TagSkeleton,
  },
  data() {
    return {
      loading: true,
      tags: [],
    };
  },
  methods: {
    handleBack() {
      this.$router.replace({
        name: "search",
      });
    },
    getList() {
      this.loading = true;
      TagService.getList()
        .then(({ data }) => {
          this.tags = data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.getList();
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
