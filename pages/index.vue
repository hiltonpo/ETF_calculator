<script setup lang="ts">
useSeoMeta({
  title: '0050 vs 0050正二 定期定額模擬',
  description: '每月定期定額投資 0050 與 0050正二 的長期資產模擬試算工具',
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12">

    <!-- Header -->
    <div class="text-center mb-12 animate-fade-down">
      <p class="font-mono text-[11px] tracking-[4px] uppercase text-blue-500 mb-3">
        定期定額模擬試算
      </p>
      <h1 class="font-black leading-tight mb-3" style="font-size: clamp(28px, 5vw, 52px)">
        <span class="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          0050
        </span>
        <span class="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mx-3">
          vs
        </span>
        <span class="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          0050正二
        </span>
      </h1>
      <p class="text-sm text-gray-500">每月各投入固定金額，N年後的資產差異分析</p>
    </div>

    <!-- Controls -->
    <SimulatorControls />

    <!-- Result Cards -->
    <ResultCards />

    <!-- Diff Banner -->
    <DiffBanner />

    <!-- Chart (ClientOnly to avoid SSR canvas issues) -->
    <ClientOnly>
      <GrowthChart />
      <template #fallback>
        <UCard
          class="mb-6"
          :ui="{ base: 'bg-gray-900 border border-white/8', body: { padding: 'p-6' } }"
        >
          <div class="flex items-center justify-center h-48 gap-3">
            <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-gray-600 animate-pulse" />
            <span class="text-sm text-gray-600">載入圖表中...</span>
          </div>
        </UCard>
      </template>
    </ClientOnly>

    <!-- Risk Warning + Disclaimer -->
    <RiskWarning />

    <!-- Assumptions -->
    <Assumptions />

  </div>
</template>
