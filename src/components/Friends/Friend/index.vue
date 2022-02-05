<template>
  <div class="d-flex flex-row justify-space-between align-center mb-4">
    <div class="d-flex flex-row align-center">
      <img class="mr-4" src="@/assets/avatar.png" width="40" height="40" />
      <div class="d-flex flex-column">
        <p class="white--text body-ubuntu-1 regular ma-0">Fullname</p>
        <p style="opacity: 0.5" class="white--text body-ubuntu-2 regular ma-0">
          @username
        </p>
      </div>
    </div>
    <OutlinedButton v-if="isOdd" text="Follow" />
    <ContainedButton v-else text="Following" />
  </div>
</template>

<script>
const OutlinedButton = () => import("@/components/Button/Outlined");
const ContainedButton = () => import("@/components/Button/Contained");

export default {
  components: {
    OutlinedButton,
    ContainedButton,
  },
  props: {
    data: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isOdd() {
      return this.data % 2 !== 0;
    },
  },
};
</script>

<style></style>
