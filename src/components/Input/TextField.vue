<template>
  <v-text-field
    v-model="computedValue"
    single-line
    hide-details
    class="white--text"
    outlined
    depressed
    label="Keyword"
    :class="customClass"
    :style="customStyle"
  />
</template>

<script>
export default {
  props: {
    customClass: { type: String, required: false, default: "" },
    customStyle: { type: String, required: false, default: "" },
    value: { required: false },
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style></style>
