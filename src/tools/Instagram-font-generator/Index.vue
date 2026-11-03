<template>
  <div style="padding:20px">
    <h2>🔥 Instagram Font Generator - TOOLBABA</h2>
    <input v-model="input" placeholder="Apna naam likho" style="width:100%;padding:12px;font-size:18px;margin:15px 0" />
    
    <div v-for="f in output" :key="f.name" style="border:1px solid #ddd;padding:12px;margin:8px 0;border-radius:8px;display:flex;justify-content:space-between">
      <b>{{ f.name }}: </b> <span>{{ f.text }}</span>
      <button @click="navigator.clipboard.writeText(f.text)">Copy</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const input = ref('ToolBaba')
const output = computed(() => [
  { name: 'Bold', text: input.value },
  { name: 'Style 1', text: `꧁༒ ${input.value} ༒꧂` },
  { name: 'Style 2', text: `★彡 ${input.value} 彡★` },
  { name: 'Style 3', text: `🔥 ${input.value} 🔥` },
  { name: 'Style 4', text: `𝓒𝓾𝓽𝓮 ${input.value}` },
])
</script>
