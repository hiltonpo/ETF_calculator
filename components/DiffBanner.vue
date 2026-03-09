<script setup lang="ts">
import { useInvestmentCalc } from '~/composables/useInvestmentCalc'

const { diffVal, diffMult, formatTWDFull } = useInvestmentCalc()
</script>

<template>
  <UCard
    class="animate-fade-up-3 mb-6"
    :ui="{ base: 'bg-gradient-to-r from-gray-900 to-gray-800 border border-white/8', body: { padding: 'p-5' } }"
  >
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-xs text-gray-500 mb-1">最終 0050正二 比 0050 多賺</p>
        <p class="font-mono text-2xl font-bold text-amber-400">+{{ formatTWDFull(diffVal) }}</p>
      </div>
      <div class="text-right">
        <UBadge color="amber" variant="soft" size="md" class="mb-2 font-mono">
          {{ diffMult.toFixed(2) }}x 差距
        </UBadge>
        <p class="text-xs text-gray-500 max-w-xs leading-relaxed">
          0050正二 的最終資產約為 0050 的
          <span class="text-amber-400 font-semibold">{{ diffMult.toFixed(2) }}x</span>，
          槓桿效應在長期複利下差距顯著放大。
        </p>
      </div>
    </div>
  </UCard>
</template>
