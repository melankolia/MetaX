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
    @keydown="handleKeyDown"
  />
</template>

<script>
export default {
  props: {
    customClass: { type: String, required: false, default: "" },
    customStyle: { type: String, required: false, default: "" },
    value: { required: false },
    handleKeyDown: { type: Function, required: false, default: () => {} },
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
