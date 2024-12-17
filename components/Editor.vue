<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  count: {
    default: 0,
  },
})

const content = ref('')

onMounted(() => {
  console.log('mounted')
  // const editor = document.querySelector('[data-mode-id="html"]') as HTMLElement
  
  // console.log(editor)
  // content.value = editor.innerHTML
})

function handleClick() {
  console.log('clicked')
  const editor = document.querySelector('[data-mode-id="html"]') as HTMLElement
  console.log(editor, editor?.innerText)
  // content.value = '<article class = "monaco-html">\n    <section>bbhhhhhhhhhhhh</section>\n    <section></section>\n</article>'
  content.value = editor?.innerText || ' NO CONTENT'
}

const counter = ref(props.count)
</script>

<template>
  <button @click = "handleClick">
    récupérer
  </button>
  <div>
    test
  </div>
  <div v-html="content">
  </div>
</template>

<style scoped>

div{
  background: red;
}

button{
  background: rgb(79, 79, 220);
  padding: 6px;
  border-radius: 5px;
  margin: 5px 0;
  font-size: .8rem;
  transition: all .3s ease;
}

button:hover{
  transform: scale(1.1);
}

</style>
