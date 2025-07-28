<script setup lang="ts">
// import/no-unresolved
import { ref } from 'vue'

interface Props {
  name?: string
}

const { name } = withDefaults(defineProps<Props>(), {
  name: 'world!'
})

const message = ref(`Hello, ${name}!`)
const def = { notify: null }
// vue/valid-define-emits
defineEmits(def)
</script>

<template>
  <!-- vue/no-parsing-error -->
  <!-- vue/no-v-html -->
  <button
    type="button"
    @click="notify"
    @click="notify"
    v-html="message"
  />
</template>
