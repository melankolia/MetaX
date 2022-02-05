<template>
  <div class="d-flex flex-column mb-9 tag-card">
    <div class="d-flex flex-column justify-end tag-container">
      <div class="tag-box headline-5 bold px-2">Summary</div>
    </div>
    <div class="d-flex flex-column mt-3">
      <div class="tag-subtitle white--text title-2 reguler">
        Very Loooooooooooooooong
      </div>
      <div class="subtitle-ubuntu-2 reguler">350 Results</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tag-card {
  width: 150px;
  height: 200px;
}

.tag-container {
  height: 150px;
  background-color: rgb(38, 38, 38);
  /* opacity: 0.06; */
  border-radius: 10px;
}

.tag-box {
  color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 8px;
  margin: 86px 10px 14px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.tag-subtitle {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
