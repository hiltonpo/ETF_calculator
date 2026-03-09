<script setup lang="ts">
const risks = [
  {
    icon: 'i-heroicons-arrow-trending-down',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    title: '波動耗損 (Volatility Drag)',
    desc: '槓桿ETF在震盪市中因每日重置特性，長期報酬會低於2倍，真實報酬率可能僅約1.3~1.6倍。',
  },
  {
    icon: 'i-heroicons-exclamation-triangle',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    title: '極端下跌風險',
    desc: '大盤跌30%時正二跌約60%，需有強大心理素質才能堅持定期定額不斷頭。',
  },
  {
    icon: 'i-heroicons-banknotes',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    title: '費用率較高',
    desc: '0050費用率約0.46%，0050正二約1%，長期複利下差異不小。',
  },
  {
    icon: 'i-heroicons-scale',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    title: '適合搭配使用',
    desc: '許多投資人選擇0050 + 0050正二 各半，平衡報酬與風險。',
  },
]

const disclaimers = [
  '投資理財有賺有賠，請選擇適合您的投資理財風險承擔程度。',
  '投資人因不同時間進場，將有不同之投資績效，過去之績效亦不代表未來績效之保證。',
  '以過去績效進行模擬投資組合之報酬率時，僅為歷史資料模擬投資組合之結果，不代表本投資組合之實際報酬率及未來績效保證。',
]
</script>

<template>
  <UCard
    class="animate-fade-up-5 mb-6"
    :ui="{ base: 'bg-gray-900 border border-white/8 border-l-2 border-l-red-500', body: { padding: 'p-6' } }"
  >
    <!-- Title -->
    <div class="flex items-center gap-2 mb-5">
      <UIcon name="i-heroicons-shield-exclamation" class="text-red-400 w-4 h-4" />
      <span class="font-mono text-xs tracking-widest uppercase text-red-400">0050正二 關鍵風險提示</span>
    </div>

    <!-- Risk grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
      <div v-for="(risk, i) in risks" :key="i" class="flex gap-3">
        <div :class="['w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', risk.bg]">
          <UIcon :name="risk.icon" :class="['w-4 h-4', risk.color]" />
        </div>
        <div>
          <div class="text-sm font-semibold text-slate-300 mb-1">{{ risk.title }}</div>
          <div class="text-xs text-gray-500 leading-relaxed">{{ risk.desc }}</div>
        </div>
      </div>
    </div>

    <UDivider class="mb-4" />

    <!-- Disclaimer -->
    <div class="text-xs text-gray-600 leading-relaxed">
      <p class="mb-1">* 重要聲明如下：</p>
      <ol class="list-decimal pl-4 space-y-1">
        <li v-for="(d, i) in disclaimers" :key="i">{{ d }}</li>
      </ol>
    </div>
  </UCard>
</template>
