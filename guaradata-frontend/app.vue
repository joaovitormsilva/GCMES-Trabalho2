<template>
  <div id="app" class="w-full">
    <h1 class="clipped">
      Guaradata
    </h1>
    <div class="navbar w-full">
      <NavBar />
    </div>
    <div class="wrapper w-full">
      <!--Banner-->
      <!-- <GlobalBanner v-if="$route.path === '/'" /> -->
      <!--Body-->
      <NuxtPage class="w-full" />
    </div>
    <!--Footer-->
    <div class="footer w-full">
      <GlobalFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Guaradata',
  ogTitle: 'Guaradata',
  description: 'This is Guaradata, let me tell you all about it.',
  ogDescription: 'This is Guaradata, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  z-index: 999;
}

.wrapper {
  flex: 1;
  margin-top: 5em;
}

.footer {
  margin-top: auto;
  z-index: 998;
}
</style>
