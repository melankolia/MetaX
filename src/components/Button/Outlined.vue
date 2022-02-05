<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :class="{ 'on-hover': hover }"
      outlined
      small
      depressed
      class="rounded-xl"
      dark
    >
      <p :class="{ 'white--text': !hover }" class="text-button ma-0">
        {{ text }}
      </p>
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
  color: #121212 !important;
  background-color: white !important;
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
