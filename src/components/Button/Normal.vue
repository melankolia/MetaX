<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :class="{ 'on-hover': hover }"
      outlined
      depressed
      block
      class="white"
      :style="customStyle"
      @click="onClick"
    >
      <p class="text-button ma-0">{{ text }}</p>
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true, default: "" },
    customStyle: { type: String, required: false, default: "" },
    onClick: { type: Function, required: false, default: () => {} },
  },
};
</script>

<style scoped>
.on-hover {
  color: white !important;
  background-color: #121212 !important;
}

.text-button {
  font-family: "Ubuntu", sans-serif !important;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 14px;
  letter-spacing: 0px !important;
  text-align: center;
}
</style>
