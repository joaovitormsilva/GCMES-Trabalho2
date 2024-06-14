<template>
  <div class="w-full">
    <div class="first-section">
      <div class="blog-banner">
        <h1>
          <span class="bg-white p-5 rounded text-black font-bold text-7xl">Blog<span class="font-brand-highlight">
              Guaradata</span></span>
          <br>
        </h1>
        <div class="text-center">
          <h1 class="text-important font-bold text-2xl mt-8 rounded inline-block">
            Ajudamos você a criar soluções na área de dados
          </h1>
        </div>
        <div class="flex justify-center mt-2">
          <NuxtLink to="/contact" class="flex justify-center items-center" rel="noopener">
            <Button severity="danger" icon="pi pi-arrow-up-right" label="Visitar o blog" class="btn-blog m-1" rounded>
              <span class="font-bold flex justify-center items-center">
                Entre em contato
                <i class="pi pi-envelope ml-2" style="font-size: 1rem" />
              </span>
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="second-section">
      <div class="blog-content">
        <div v-if="response" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          <div v-for="(item, index) in response" :key="index">
            <BlogCard :blog-content="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const response = ref([])
onMounted(async () => {
  const dataResponse = await BlogContent.BlogContentService.getBlogContents()
  if (dataResponse.success) {
    response.value = dataResponse.data
  } else {
    response.value = []
  }
})
</script>

<style lang="scss" scoped>
.first-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
  background-image: linear-gradient(to right, rgb(255, 255, 255), #DB7E2C 65%, $global-background);
}

.blog-banner {
  text-align: center;
}

.btn-blog {
  background-color: $btn-blog;
  border: none;
  color: white;
}

.btn-blog:hover {
  background-color: white;
  color: black;
  border: none;
}

.btn-blog:hover .icon {
  transition: transform 0.25s ease-in-out;
  transform: rotate(45deg);
}

.second-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  max-width: 1600px;
}

@media (max-width: 900px) {
  h1>span {
    font-size: 2.5rem;
  }

}

@media (max-width: 390px) {
  h1>span {
    font-size: 2rem;
  }

}
</style>
