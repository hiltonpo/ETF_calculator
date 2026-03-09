<script setup lang="ts">
const assumptions = [
  { label: '0050 年化報酬',     value: '~10%',      note: '（歷史約9-12%）' },
  { label: '0050正二 年化報酬', value: '~15%',      note: '（含波動耗損後估算）' },
  { label: '計算方式',         value: '每月月底買入', note: '，複利計算' },
  { label: '費用',             value: '不含稅費',    note: '、交易成本' },
  { label: '報酬率',           value: '固定年化',    note: '，實際逐年波動' },
]
</script>

<template>
  <UCard
    class="animate-fade-up-6"
    :ui="{ base: 'bg-gray-900 border border-white/8', body: { padding: 'p-5' } }"
  >
    <p class="font-mono text-[11px] tracking-widest uppercase text-gray-600 mb-3">模擬假設說明</p>
    <div class="flex flex-wrap gap-x-6 gap-y-2">
      <span v-for="(item, i) in assumptions" :key="i" class="text-xs text-gray-500">
        {{ item.label }}
        <span class="font-mono text-blue-400">{{ item.value }}</span>{{ item.note }}
      </span>
    </div>
  </UCard>
</template>
