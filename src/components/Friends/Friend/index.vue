<template>
  <div class="d-flex flex-row justify-space-between align-center mb-4">
    <div class="d-flex flex-row align-center">
      <img
        class="mr-4"
        :src="sourceFile"
        width="40"
        height="40"
        @error="handleError"
      />
      <div class="d-flex flex-column">
        <p class="white--text body-ubuntu-1 regular ma-0">{{ data.name }}</p>
        <p style="opacity: 0.5" class="white--text body-ubuntu-2 regular ma-0">
          @{{ data.username }}
        </p>
      </div>
    </div>
    <OutlinedButton v-if="!data.isFollowing" text="Follow" />
    <ContainedButton v-else text="Following" />
  </div>
</template>

<script>
import DefaultImage from "@/assets/avatar.png";
const OutlinedButton = () => import("@/components/Button/Outlined");
const ContainedButton = () => import("@/components/Button/Contained");

export default {
  components: {
    OutlinedButton,
    ContainedButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: "",
        username: "",
        avatar: "",
        isFollowing: false,
      }),
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

<style></style>
