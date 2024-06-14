<template>
  <div class="card">
    <Stepper linear orientation="horizontal">
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-spinner" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ nextCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Confira os dados gerados a partir do seu perfil e do dia atual:
          </h1>
          <div class="flex flex-col justify-content-center">
            <div class="border-4 border-dashed p-5">
              <p class="pt-3 m-1 font-bold text-lg">
                Autor do texto:
              </p>
              <input id="author" v-model="authorInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                E-mail do autor:
              </p>
              <input id="author-email" v-model="authorEmailInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Data de criação:
              </p>
              <input id="author-email" v-model="updateAtInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Data de atualização:
              </p>
              <input id="author-email" v-model="createdAtInput" type="text" class="w-full border-2 p-2 m-1" disabled>
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Próximo" class="btn-stepper m-1" rounded @click="validateFormStep1(nextCallback)" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-cog" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Preencha as informações iniciais:
          </h1>
          <div class="flex flex-col justify-content-center">
            <div class="border-4 border-dashed p-5">
              <p class="pt-3 m-1 font-bold text-lg">
                Título do texto:
              </p>
              <input id="title" v-model="titleInput" type="text" placeholder="Digite o título do texto"
                class="w-full border-2 p-2 m-1">
              <p class="pt-3 m-1 font-bold text-lg">
                URL amigável do post (sugerida):
              </p>
              <input id="title" v-model="urlTitleInputValid" type="text" class="w-full border-2 p-2 m-1">
              <p class="pt-3 m-1 font-bold text-lg">
                URL do banner:
              </p>
              <input id="coverImage" v-model="coverImageInput" type="text" placeholder="Insira a URL do banner"
                class="w-full border-2 p-2 m-1">
              <p class="pt-3 m-1 font-bold text-lg">
                Tempo de leitura (minutos):
              </p>
              <input id="coverImage" v-model="readingTimeInput" type="text" placeholder="Insira o tempo de leitura"
                class="w-full border-2 p-2 m-1">
              <p class="pt-3 m-1 font-bold text-lg">
                Resumo do texto:
              </p>
              <CreateBlogContentTextArea :text-area="contentSummaryInput" class="w-full border-2 p-2 m-1"
                :disabled="false" @update:text-area="updateTextArea" />
              <p class="pt-3 m-1 font-bold text-lg">
                Categoria do texto:
              </p>
              <CreateBlogContentDropDown :selected-category="contentCategory" drop-data-info="category"
                :disabled="false" class="w-full m-1" @update:selected-category="updateContentCategory" />
              <p class="pt-3 m-1 font-bold text-lg">
                Tags do texto:
              </p>
              <CreateBlogContentFilterFields class="w-full m-1" id-content="contentFilterFields1"
                :selected-tags="contentTags" :disabled="false" @update:selected-tags="updateContentTags" />
              <p class="pt-3 m-1 font-bold text-lg">
                Idioma do texto:
              </p>
              <CreateBlogContentDropDown :selected-category="contentLanguage" drop-data-info="tags" class="w-full m-1"
                :disabled="false" @update:selected-category="updateContentLanguage" />
              <p class="pt-3 m-1 font-bold text-lg">
                Data de publicação do texto:
              </p>
              <div class="flex-auto">
                <Calendar v-model="publicationDateInput" class="w-full m-1" show-icon icon-display="input"
                  input-id="icondisplay" />
              </div>
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Voltar" severity="secondary" class="btn-stepper m-1" rounded @click="prevCallback" />
            <Button label="Próximo" class="btn-stepper m-1" rounded @click="validateFormStep2(nextCallback)" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-star" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Escreva seu conteúdo:
          </h1>
          <div class="flex flex-col">
            <div class="border-4 border-dashed p-5">
              <QuillEditor :editor-content="initialContent" :read-only="false" @update:editor-content="updateContent" />
              <div class="flex py-4">
                <Button label="Mostrar conteúdo" class="btn-stepper m-1" rounded
                  :style="{ 'display': showContent ? 'none' : 'block' }" @click="switchShowContent" />
                <Button label="Ocultar conteúdo" class="btn-stepper m-1" rounded
                  :style="{ 'display': showContent ? 'block' : 'none' }" @click="switchShowContent" />
              </div>
              <QuillContent :style="{ display: showContent ? 'block' : 'none' }" :editor-content="initialContent"
                id-content="1" />
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Voltar" severity="secondary" class="btn-stepper m-1" rounded @click="prevCallback" />
            <Button label="Próximo" severity="secondary" class="btn-stepper m-1" rounded
              @click="validateFormStep3(nextCallback)" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-sync" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ prevCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Revise todo o conteúdo:
          </h1>
          <div class="flex flex-col">
            <div class="border-4 border-dashed p-5">
              <p class="pt-3 m-1 font-bold text-lg">
                Autor do texto:
              </p>
              <input id="author" v-model="authorInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                E-mail do autor:
              </p>
              <input id="author-email" v-model="authorEmailInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Data de criação:
              </p>
              <input id="author-email" v-model="updateAtInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Data de atualização:
              </p>
              <input id="author-email" v-model="createdAtInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Título do texto:
              </p>
              <input id="title" v-model="titleInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                URL amigável do post:
              </p>
              <input id="title" v-model="urlTitleInputValid" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                URL do banner:
              </p>
              <input id="coverImage" v-model="coverImageInput" type="text" class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Tempo de leitura (minutos):
              </p>
              <input id="coverImage" v-model="readingTimeInput" type="text" placeholder="Insira o tempo de leitura"
                class="w-full border-2 p-2 m-1" disabled>
              <p class="pt-3 m-1 font-bold text-lg">
                Resumo do texto:
              </p>
              <CreateBlogContentTextArea :text-area="contentSummaryInput" class="w-full border-2 p-2 m-1"
                :disabled="true" @update:text-area="updateTextArea" />
              <p class="pt-3 m-1 font-bold text-lg">
                Categoria do texto:
              </p>
              <CreateBlogContentDropDown :selected-category="contentCategory" drop-data-info="category"
                class="w-full m-1" :disabled="true" @update:selected-category="updateContentCategory" />
              <p class="pt-3 m-1 font-bold text-lg">
                Tags do texto:
              </p>
              <CreateBlogContentFilterFields id-content="contentFilterFields2" class="w-full m-1"
                :selected-tags="contentTags" :disabled="true" @update:selected-tags="updateContentTags" />
              <p class="pt-3 m-1 font-bold text-lg">
                Idioma do texto:
              </p>
              <CreateBlogContentDropDown :selected-category="contentLanguage" drop-data-info="tags" class="w-full m-1"
                :disabled="true" @update:selected-category="updateContentLanguage" />
              <p class="pt-3 m-1 font-bold text-lg">
                Data de publicação do texto:
              </p>
              <div class="flex-auto">
                <Calendar v-model="publicationDateInput" class="w-full m-1" show-icon icon-display="input"
                  input-id="icondisplay" disabled />
              </div>
              <QuillContent :editor-content="initialContent" id-content="2" />
            </div>
            <Button label="Publicar conteúdo" class="btn-stepper mt-5" rounded @click="createContent" />
          </div>
          <div class="flex py-4">
            <Button label="Voltar" severity="secondary" class="btn-stepper m-1" rounded @click="prevCallback" />
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </div>
</template>

<script setup>
import Stepper from 'primevue/stepper'
import StepperPanel from 'primevue/stepperpanel'
import { BlogContent } from '~/composables/BlogContentService'

const publicationDateInput = ref()

const initialContent = ref('')
const showContent = ref(false)

const authorInput = ref('')
const authorEmailInput = ref('')
const updateAtInput = ref('')
const createdAtInput = ref('')

const brazilDateTime = (date) => {
  const date2 = new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
  const dataBase = date2.toISOString().replace(/\.\d{3}Z$/, '')
  return dataBase
}

onMounted(async () => {
  const data = await LoginUtils.LoginService.validate(true)
  const date = brazilDateTime(new Date())
  authorInput.value = data.userData.name
  authorEmailInput.value = data.userData.email
  updateAtInput.value = date
  createdAtInput.value = date
})

const validateFormStep1 = (nextCallback) => {
  console.log(authorInput.value)
  console.log(authorEmailInput.value)
  console.log(updateAtInput.value)
  console.log(createdAtInput.value)
  nextCallback()
}

const titleInput = ref('')
const urlTitleInputValid = ref('')
const coverImageInput = ref('')
const readingTimeInput = ref('')
const contentSummaryInput = ref('')
const contentCategory = ref({})
const contentTags = ref([])
const contentLanguage = ref({})

watch(titleInput, (newValue) => {
  urlTitleInputValid.value = newValue
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replaceAll(/[^0-9a-zA-Z\s]+/g, '')
    .replaceAll(' ', '-')
    .toLowerCase();
});

const updateTextArea = (newContent) => {
  contentSummaryInput.value = newContent
}

const updateContentCategory = (newContent) => {
  contentCategory.value = newContent
}

const updateContentTags = (newContent) => {
  contentTags.value = newContent
}

const updateContentLanguage = (newContent) => {
  contentLanguage.value = newContent
}

const validateFormStep2 = (nextCallback) => {
  console.log(contentTags.value.map((item) => { return item.name }))
  console.log(titleInput.value)
  console.log(coverImageInput.value)
  console.log(contentSummaryInput.value)
  console.log(contentCategory.value.name.name)
  console.log(contentLanguage.value.name.name)
  console.log(brazilDateTime(new Date(publicationDateInput.value)))
  nextCallback()
}

const validateFormStep3 = (nextCallback) => {
  console.log(contentTags.value)
  console.log(authorInput.value)
  console.log(coverImageInput.value)
  console.log(authorEmailInput.value)
  console.log(updateAtInput.value)
  console.log(createdAtInput.value)
  console.log(titleInput.value)
  console.log(contentSummaryInput.value)
  console.log(contentCategory.value)
  console.log(contentLanguage.value)
  nextCallback()
}

const updateContent = (newContent) => {
  initialContent.value = newContent
}

const switchShowContent = () => {
  showContent.value = !showContent.value
}
const createContent = async () => {
  const content = {
    title: titleInput.value,
    author: authorInput.value,
    authorEmail: authorEmailInput.value,
    urlTitle: urlTitleInputValid.value,
    content: initialContent.value,
    contentSummary: contentSummaryInput.value,
    publicationDate: brazilDateTime(new Date(publicationDateInput.value)),
    updatedAt: updateAtInput.value,
    createdAt: createdAtInput.value,
    category: contentCategory.value.name.name,
    keywords: contentTags.value.map((item) => { return item.name }),
    coverImage: coverImageInput.value,
    language: contentLanguage.value.name.name,
    readingTime: readingTimeInput.value
  }
  const response = await BlogContent.BlogContentService.createBlogContent(content)
  if (response.success) { await navigateTo(`/blog/${response.data._id}`) }
  console.log(response)
}
</script>

<style lang="scss" scoped>
.header {
  color: black;
}

.btn-stepper {
  background-color: $btn-blog;
  border: none;
  color: white;
}

input {
  padding-left: 15px;
  border-radius: 5px;
}

input::placeholder {
  padding-left: 3px;
  color: #999;
  font-style: italic;
  opacity: 1;
}

#content-summary {
  height: 150px;
}

#content-summary::placeholder {
  margin: 0px;
}
</style>
