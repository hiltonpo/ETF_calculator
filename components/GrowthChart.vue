<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useInvestmentCalc } from '~/composables/useInvestmentCalc'

const { chartData } = useInvestmentCalc()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: any = null

async function initChart() {
  if (!canvasRef.value) return
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)
  chartInstance = new Chart(canvasRef.value, {
    type: 'line',
    data: buildChartData(),
    options: chartOptions(),
  })
}

function buildChartData() {
  const { labels, series0050, series2x, seriesCost } = chartData.value
  return {
    labels,
    datasets: [
      {
        label: '0050正二',
        data: series2x,
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245,158,11,0.08)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: false,
        pointRadius: 3,
        pointBackgroundColor: '#f59e0b',
      },
      {
        label: '0050',
        data: series0050,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.08)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: false,
        pointRadius: 3,
        pointBackgroundColor: '#3b82f6',
      },
      {
        label: '累計本金',
        data: seriesCost,
        borderColor: '#334155',
        borderWidth: 1.5,
        borderDash: [6, 4],
        tension: 0,
        fill: false,
        pointRadius: 0,
      },
    ],
  }
}

function chartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: true,
    interaction: { mode: 'index' as const, intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        borderColor: '#334155',
        borderWidth: 1,
        titleColor: '#94a3b8',
        bodyColor: '#e2e8f0',
        padding: 12,
        callbacks: {
          label: (ctx: any) => ` ${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(51,65,85,0.6)' },
        ticks: { color: '#475569', font: { size: 11, family: 'Space Mono' } },
      },
      y: {
        grid: { color: 'rgba(51,65,85,0.6)' },
        ticks: {
          color: '#475569',
          font: { size: 11, family: 'Space Mono' },
          callback: (v: any) =>
            v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1)}M` : `${(v / 1000).toFixed(0)}K`,
        },
      },
    },
  }
}

watch(chartData, () => {
  if (!chartInstance) return
  const newData = buildChartData()
  chartInstance.data.labels = newData.labels
  chartInstance.data.datasets.forEach((ds: any, i: number) => {
    ds.data = newData.datasets[i].data
  })
  chartInstance.update()
}, { deep: true })

onMounted(() => initChart())
onUnmounted(() => chartInstance?.destroy())
</script>

<template>
  <UCard
    class="animate-fade-up-4 mb-6"
    :ui="{ base: 'bg-gray-900 border border-white/8', body: { padding: 'p-6' } }"
  >
    <!-- Header -->
    <div class="flex items-center justify-between flex-wrap gap-3 mb-6">
      <span class="font-mono text-sm font-semibold text-gray-400 tracking-wider">資產成長曲線</span>
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-amber-400" />
          <span class="text-xs text-gray-500">0050正二</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-blue-500" />
          <span class="text-xs text-gray-500">0050</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-slate-600" />
          <span class="text-xs text-gray-500">本金</span>
        </div>
      </div>
    </div>

    <canvas ref="canvasRef" style="max-height: 320px" />
  </UCard>
</template>
