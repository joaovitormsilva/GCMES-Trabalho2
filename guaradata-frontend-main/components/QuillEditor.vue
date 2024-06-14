<template>
  <div class="editor">
    <div id="editor" />
  </div>
</template>

<script setup>
const props = defineProps({
  editorContent: {
    type: String,
    required: true
  },
  readOnly: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:editorContent'])

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],
  [{ header: 1 }, { header: 2 }],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ['clean']
]

const editorContent = ref(props.editorContent)

let quillInstance

onMounted(async () => {
  if (process.client) {
    const Quill = (await import('quill')).default
    quillInstance = new Quill('#editor', {
      placeholder: 'Compose an epic...',
      readOnly: props.readOnly,
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      }
    })
    quillInstance.on('text-change', () => {
      const contents = quillInstance.getContents()
      editorContent.value = JSON.stringify(contents.ops, null, 2)
      emits('update:editorContent', editorContent.value)
    })
  }
})

watch(() => props.editorContent, (newValue) => {
  if (newValue !== editorContent.value) {
    editorContent.value = newValue
    quillInstance.root.innerHTML = newValue
  }
})
</script>

<style>
#editor {
  height: 300px;
  width: 100%;
  color: black;
}
</style>
