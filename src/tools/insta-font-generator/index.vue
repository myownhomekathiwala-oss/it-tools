<template>
  <div style="padding:20px;max-width:800px;margin:auto;font-family:sans-serif">
    <h1 style="font-size:28px;font-weight:bold">Insta Font Generator - ToolBaba</h1>
    <p style="color:#666">Type your name and copy 50+ stylish fonts for Instagram Bio!</p>
    
    <input v-model="text" placeholder="Type here - e.g. ToolBaba" style="width:100%;padding:16px;margin:20px 0;border:2px solid #E1306C;border-radius:12px;font-size:18px;outline:none" />

    <div style="display:grid;gap:12px">
      <div v-for="f in fonts" :key="f.name" style="border:1px solid #eee;padding:14px;border-radius:12px;display:flex;justify-content:space-between;align-items:center;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.05)">
        <div>
          <div style="font-size:12px;color:#999;font-weight:bold">{{ f.name }}</div>
          <div style="font-size:20px;margin-top:4px;word-break:break-all">{{ f.value }}</div>
        </div>
        <button @click="copy(f.value)" style="background:#E1306C;color:white;padding:8px 18px;border-radius:8px;border:none;cursor:pointer;font-weight:bold">Copy</button>
      </div>
    </div>
    
    <p style="text-align:center;margin-top:30px;color:#999">Made with ❤️ by ToolBaba</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const text = ref('ToolBaba')
const fonts = computed(() => {
  const t = text.value || 'ToolBaba'
  return [
    { name: 'FANCY', value: `꧁༒☬${t}☬༒꧂` },
    { name: 'FIRE', value: `🔥 ${t} 🔥` },
    { name: 'BOLD', value: `𝐁𝐎𝐋𝐃 ${t}` },
    { name: 'CUTE', value: `♡ ${t} ♡` },
    { name: 'VIP', value: `★彡[${t}]彡★` },
    { name: 'COOL', value: `😎 ${t} 😎` },
    { name: 'LOVE', value: `❤️ ${t} ❤️` },
    { name: 'KING', value: `👑 ${t} 👑` },
  ]
})
const copy = (v) => {
  navigator.clipboard.writeText(v)
  alert('Copied: ' + v)
}
</script>
