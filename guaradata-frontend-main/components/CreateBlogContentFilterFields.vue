<template>
  <div class="flex justify-center">
    <MultiSelect :id="idContent" v-model="internalSelectedTags" :options="tagsToSelect" filter option-label="name"
      placeholder="Selecione as tags" :max-selected-labels="12" class="w-full" :disabled="disabled" />
  </div>
</template>

<script setup>
const props = defineProps({
  selectedTags: {
    type: Array,
    required: true,
    default: () => []
  },
  disabled: {
    type: Boolean,
    required: true
  },
  idContent: {
    type: String,
    required: true
  }
});

const emits = defineEmits(['update:selectedTags']);
const { selectedTags } = toRefs(props);
const internalSelectedTags = ref([...selectedTags.value]);

watch(selectedTags, (newVal) => {
  if (newVal !== internalSelectedTags.value) {
    internalSelectedTags.value = newVal;
  }
});

watch(internalSelectedTags, (newVal) => {
  if (newVal !== selectedTags.value) {
    emits('update:selectedTags', newVal);
  }
});

const tagsToSelect = ref([
  { name: 'Aprendizado de máquina', code: 'ML' },
  { name: 'Ciência de dados', code: 'DS' },
  { name: 'Engenharia de dados', code: 'DE' },
  { name: 'ETL', code: 'ETL' },
  { name: 'Python', code: 'Python' },
  { name: 'Pandas', code: 'PD' },
  { name: 'ScikitLearn', code: 'SK' },
]);
</script>
