<template>
  <div>
    <n-card title="Instagram Font Generator - 5 Styles">
      <n-input v-model:value="text" placeholder="Yaha likho... ToolBaba" size="large" />
    </n-card>

    <n-card v-for="(f, i) in fonts" :key="i" style="margin-top:12px; cursor:pointer" @click="copy(f.out)">
      <template #header><b>{{ f.name }}</b></template>
      <div style="font-size:22px; word-break:break-all;">{{ f.out }}</div>
      <n-button size="small" style="margin-top:10px">Copy</n-button>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMessage } from 'naive-ui';
const text = ref('ToolBaba');
const message = useMessage();

const mapChars = (s:string, upperBase:number, lowerBase:number) => s.split('').map(c=>{
  const code = c.charCodeAt(0);
  if(code>=65 && code<=90) return String.fromCodePoint(upperBase+code-65);
  if(code>=97 && code<=122) return String.fromCodePoint(lowerBase+code-97);
  return c;
}).join('');

const fonts = computed(()=> {
  const t = text.value || 'ToolBaba';
  return [
    { name: '1. Bold', out: mapChars(t, 0x1D5D4, 0x1D5EE) },
    { name: '2. Italic', out: mapChars(t, 0x1D608, 0x1D622) },
    { name: '3. Bold Italic', out: mapChars(t, 0x1D63C, 0x1D656) },
    { name: '4. Script Cursive', out: mapChars(t, 0x1D4D0, 0x1D4EA) },
    { name: '5. Fraktur', out: mapChars(t, 0x1D504, 0x1D51E) },
  ]
});

const copy = (v:string) => {
  navigator.clipboard.writeText(v);
  message.success('Copied!');
};
</script>
