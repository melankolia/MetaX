<template>
  <v-slider
    v-model="size"
    :tick-labels="sizes"
    :max="sizes.length - 1"
    step="1"
    :tick-size="0"
    color="#ff9b33"
    thumb-size="100"
    track-color="white"
  ></v-slider>
</template>

<script>
export default {
  data() {
    return {
      size: 0,
      sizes: ["3", "6", "9", "12", "15", "50"],
    };
  },
  watch: {
    size(val) {
      this.$emit("onChange", this.sizes[val]);
    },
  },
};
</script>

<style></style>
