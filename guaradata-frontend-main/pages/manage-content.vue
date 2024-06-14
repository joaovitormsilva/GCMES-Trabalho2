<template>
  <div class="flex mt-4">
    <div class="firstSection">
      <SideBarMenu v-if="$route.path.includes('/manage-content')" />
    </div>
    <div class="secondSection">
      <NuxtPage />
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.firstSection {
  background-color: #ffff;
  width: 20%;
  height: 500px;
  padding: 15px;
  overflow: hidden;
  margin: 2% 0.5% 1% 0.5%;
  border-radius: 25px;
  border: 2px solid #e6e6e6;

  @media (max-width: 1060px) {
    width: 20%;
    margin: 20px 0;
  }
}

.secondSection {
  background-color: #fff;
  height: auto;
  width: 80%;
  border-radius: 25px;
  padding: 10px 10px 10px 10px;
  overflow: hidden;
  margin: 2% 2% 2% 0%;
  border: 2px solid #e6e6e6;

  @media (max-width: 1060px) {
    height: auto;
    background-position: top;
    width: 80%;
  }
}
</style>
