<template>
  <div class="card flex justify-center items-center">
    <Galleria id="global-gallery" :value="images" :num-visible="1" :circular="true" container-style="max-width: 100vw"
      :show-item-navigators="true" :show-thumbnails="false" :auto-play="true" :transition-interval="5000">
      <template #item="slotProps">
        <NuxtImg :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
          style="width: 100%; height: 50vh; display: block;" />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([{ itemImageSrc: '/banner/banner_1.png', alt: 'Banner 1' }, { itemImageSrc: '/banner/banner_2.png', alt: 'Banner 2' }])

</script>
