<script setup lang="ts">
import { useInvestmentCalc } from '~/composables/useInvestmentCalc'

const {
  rate0050, rate2x,
  totalCost, fv0050, fv2x,
  profit0050, profit2x,
  mult0050, mult2x,
  formatTWDFull,
} = useInvestmentCalc()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 animate-fade-up-2">

    <!-- 0050 Card -->
    <UCard :ui="{ base: 'bg-gray-900 border border-white/8 overflow-hidden relative hover:border-white/20 transition-colors', body: { padding: 'p-6' } }">
      <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-400" />
      <div class="font-mono text-xs tracking-[3px] text-blue-400 mb-1">00 50</div>
      <div class="text-xs text-gray-500 mb-5">元大台灣50 ETF</div>
      <div class="font-mono font-bold text-white mb-1" style="font-size: clamp(20px, 3vw, 28px)">{{ formatTWDFull(fv0050) }}</div>
      <div class="text-xs text-gray-500 mb-4">總資產（含本金）</div>
      <UDivider class="mb-4" />
      <div class="grid grid-cols-2 gap-3">
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">總投入本金</div>
          <div class="font-mono text-sm font-semibold text-blue-400">{{ formatTWDFull(totalCost) }}</div>
        </div>
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">投資獲利</div>
          <div class="font-mono text-sm font-semibold text-emerald-400">+{{ formatTWDFull(profit0050) }}</div>
        </div>
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">報酬倍數</div>
          <div class="font-mono text-sm font-semibold text-emerald-400">{{ mult0050.toFixed(2) }}x</div>
        </div>
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">年化報酬</div>
          <div class="font-mono text-sm font-semibold text-blue-400">{{ rate0050.toFixed(1) }}%</div>
        </div>
      </div>
    </UCard>

    <!-- 0050正二 Card -->
    <UCard :ui="{ base: 'bg-gray-900 border border-white/8 overflow-hidden relative hover:border-white/20 transition-colors', body: { padding: 'p-6' } }">
      <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400" />
      <div class="font-mono text-xs tracking-[3px] text-amber-400 mb-1">00 631L</div>
      <div class="text-xs text-gray-500 mb-5">元大台灣50正向2倍 ETF</div>
      <div class="font-mono font-bold text-white mb-1" style="font-size: clamp(20px, 3vw, 28px)">{{ formatTWDFull(fv2x) }}</div>
      <div class="text-xs text-gray-500 mb-4">總資產（含本金）</div>
      <UDivider class="mb-4" />
      <div class="grid grid-cols-2 gap-3">
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">總投入本金</div>
          <div class="font-mono text-sm font-semibold text-amber-400">{{ formatTWDFull(totalCost) }}</div>
        </div>
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">投資獲利</div>
          <div class="font-mono text-sm font-semibold text-emerald-400">+{{ formatTWDFull(profit2x) }}</div>
        </div>
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">報酬倍數</div>
          <div class="font-mono text-sm font-semibold text-emerald-400">{{ mult2x.toFixed(2) }}x</div>
        </div>
        <div>
          <div class="font-mono text-[10px] uppercase tracking-wide text-gray-600 mb-1">年化報酬</div>
          <div class="font-mono text-sm font-semibold text-amber-400">{{ rate2x.toFixed(1) }}%</div>
        </div>
      </div>
    </UCard>

  </div>
</template>
