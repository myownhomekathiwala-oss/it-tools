<template>
  <div>
    <n-input v-model:value="text" type="text" placeholder="Type your Instagram bio..." size="large" clearable />

    <div style="margin-top: 20px; display: grid; gap: 12px">
      <div v-for="(style, i) in styledTexts" :key="i" 
           style="padding:12px; border:1px solid #ddd; border-radius:8px; cursor:pointer; background:white"
           @click="copy(style)">
        <div style="font-size:18px">{{ style }}</div>
        <div style="font-size:12px; color:gray">Click to copy</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const text = ref('ToolBaba');

const styledTexts = computed(() => {
  const t = text.value;
  if (!t) return [];
  const toBold = (s: string) => s.replace(/[a-zA-Z]/g, (c) => {
    const code = c.charCodeAt(0);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D41A + (code - 97));
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D400 + (code - 65));
    return c;
  });
  const toScript = (s: string) => s.replace(/[a-zA-Z]/g, (c) => {
    const code = c.charCodeAt(0);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D4EA + (code - 97));
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D4D0 + (code - 65));
    return c;
  });
  const toMono = (s: string) => s.replace(/[a-zA-Z0-9]/g, (c) => {
    const code = c.charCodeAt(0);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D68A + (code - 97));
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D670 + (code - 65));
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7F6 + (code - 48));
    return c;
  });

  return [t, toBold(t), toScript(t), toMono(t), `꧁༒☬ ${t} ☬༒꧂`, `•´¯` + t + `¯´•`];
});

const copy = (v: string) => {
  navigator.clipboard.writeText(v);
};
</script>
