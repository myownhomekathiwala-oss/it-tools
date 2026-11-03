<template>
  <div>
    <n-card>
      <n-input v-model:value="text" placeholder="Type here..." size="large" />
    </n-card>
    <div style="margin-top:15px">
      <n-card v-for="(f,i) in list" :key="i" style="margin-bottom:10px; cursor:pointer" @click="copy(f)">
        {{ f }}
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const text = ref('ToolBaba');
const list = computed(() => {
  const t = text.value || 'ToolBaba';
  return [t, `𝗧𝗼𝗼𝗹𝗕𝗮𝗯𝗮`.replace(/./g, (c,i)=> t[i]||''), `𝒯𝑜𝑜𝓁𝐵𝒶𝒷𝒶`, `𝕋𝕠𝕠𝕝𝔹𝕒𝕓𝕒`, `• ${t} •`];
});
const copy = (v:string) => navigator.clipboard.writeText(v);
</script>
