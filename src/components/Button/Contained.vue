<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :class="{ 'on-hover': hover }"
      outlined
      small
      depressed
      class="white rounded-xl"
    >
      <p class="text-button ma-0">{{ text }}</p>
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "Button",
    },
  },
};
</script>

<style scoped>
.on-hover {
  color: white !important;
  background-color: #121212 !important;
}

.text-button {
  font-family: "Open Sans", sans-serif !important;
  font-size: 12px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 12px !important;
  letter-spacing: 0px !important;
  text-align: center !important;
  text-transform: none !important;
}
</style>
