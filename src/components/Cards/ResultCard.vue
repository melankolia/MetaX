<template>
  <div class="d-flex flex-column mb-8">
    <img class="mb-3 image-cover" src="@/assets/image-result.png" />
    <p class="white--text title-1 ma-0">This is a Title</p>
    <p class="subtitle-ubuntu-2 ma-0">by username</p>
  </div>
</template>

<script>
export default {};
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
