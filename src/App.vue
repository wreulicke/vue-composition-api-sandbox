<template>
  <div id="app">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/composition-api"
export default {
  setup() {
    const text = ref("Hello World")
    setTimeout(() => {
      text.value = ""
    }, 1000)

    return {
      text,
    }
  },
}
</script>

<style></style>
