<template>
  <div class="">
    <div class="cover">
      <img :src="response.coverImage" alt="">
    </div>
    <div v-if="response" class="content">
      <QuillContent :editor-content="response.content" id-content="3" />
    </div>
    <div v-else>
      Carregando...
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const response = ref(null)

const { data, error } = await useAsyncData(
  () => $fetch(`${useRuntimeConfig().public.NUXT_API_URL}/blogcontents/${route.params.id}`)
)
if (error.value) {
  console.error('Erro ao buscar dados do blog:', error.value)
} else {
  response.value = data?.value
}
</script>

<style scoped>
.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
}

.cover>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  margin: 35px 350px 35px 350px;
}

@media (max-width: 1000px) {
  .content {
    margin: 35px 150px 35px 150px;
  }
}

@media (max-width: 800px) {
  .content {
    margin: 35px 75px 35px 75px;
  }
}

@media (max-width: 600px) {
  .content {
    margin: 35px 35px 35px 35px;
  }

  .cover {
    height: 150px;
  }
}
</style>
