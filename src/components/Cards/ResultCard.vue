<template>
  <div class="d-flex flex-column mb-8">
    <img class="mb-3 image-cover" :src="sourceFile" @error="handleError" />
    <p class="white--text title-1 ma-0">{{ data.name }}</p>
    <p class="subtitle-ubuntu-2 ma-0">by {{ data.username }}</p>
  </div>
</template>

<script>
import DefaultImage from "@/assets/image-result.png";

export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {
          avater: null,
          name: null,
          username: null,
        };
      },
    },
  },
  data() {
    return {
      error: false,
      DefaultImage,
    };
  },
  methods: {
    handleError() {
      this.error = true;
    },
  },
  computed: {
    sourceFile() {
      return this.error ? this.DefaultImage : this.data.avater;
    },
  },
};
</script>

<style scoped>
.image-cover {
  height: 146px;
  width: 219px;
}

@media only screen and (max-width: 600px) {
  .image-cover {
    width: 100%;
    height: 222.67px;
  }
}
</style>
