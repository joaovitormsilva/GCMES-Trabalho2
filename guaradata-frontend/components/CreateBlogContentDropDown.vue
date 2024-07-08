<template>
  <div class="flex justify-center">
    <Dropdown v-model="selectedCategory.name" :options="optionsDropDown" filter option-label="name"
      placeholder="Selecione a categoria" class="w-full" :disabled="disabled">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 0px">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 0px">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedCategory: {
    type: Object,
    required: true
  },
  dropDataInfo: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:selectedCategory'])
const selectedCategory = ref(props.selectedCategory)

watch(() => selectedCategory.value, () => {
  emits('update:selectedCategory', selectedCategory.value)
})

const optionsDropDown = ref([])

onMounted(() => {
  if (props.dropDataInfo === 'category') {
    optionsDropDown.value = [
      { name: 'Aprendizado de máquina', code: 'AM' },
      { name: 'Estatística', code: 'Estat' },
      { name: 'Engenharia de dados', code: 'ED' }
    ]
  } else if (props.dropDataInfo === 'tags') {
    optionsDropDown.value = [
      { name: 'Português brasileiro', code: 'pt-br' },
      { name: 'Inglês', code: 'en' },
      { name: 'Espanhol', code: 'es' }
    ]
  }
})

</script>
