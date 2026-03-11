<script setup lang="ts">
import { useInvestmentCalc } from "~/composables/useInvestmentCalc";

const {
  monthlyInvest,
  years,
  rate0050,
  rate2x,
  setMonthlyInvest,
  setYears,
  setRate0050,
  setRate2x,
} = useInvestmentCalc();

const sliders = computed(() => [
  {
    label: "每月投入金額",
    value: monthlyInvest.value,
    min: 1000,
    max: 20000,
    step: 1000,
    display: `$${monthlyInvest.value.toLocaleString()}`,
    color: "text-blue-400",
    onUpdate: setMonthlyInvest,
  },
  {
    label: "投資年限",
    value: years.value,
    min: 5,
    max: 30,
    step: 1,
    display: `${years.value} 年`,
    color: "text-blue-400",
    onUpdate: setYears,
  },
  {
    label: "0050 年化報酬率",
    value: rate0050.value,
    min: 5,
    max: 15,
    step: 0.5,
    display: `${rate0050.value.toFixed(1)}%`,
    color: "text-blue-400",
    onUpdate: setRate0050,
  },
  {
    label: "0050正二 年化報酬率",
    value: rate2x.value,
    min: 8,
    max: 25,
    step: 0.5,
    display: `${rate2x.value.toFixed(1)}%`,
    color: "text-amber-400",
    onUpdate: setRate2x,
  },
]);
const pct = (slider: any) =>
  ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
</script>

<template>
  <UCard
    class="animate-fade-up-1 mb-6"
    :ui="{
      base: 'bg-gray-900 border border-white/8',
      body: { padding: 'p-6' },
    }"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="(slider, i) in sliders" :key="i">
        <div class="flex justify-between items-center mb-2">
          <span
            class="font-mono text-[11px] tracking-widest uppercase text-gray-500"
          >
            {{ slider.label }}
          </span>
          <span :class="['font-mono text-sm font-bold', slider.color]">
            {{ slider.display }}
          </span>
        </div>
        <input
          type="range"
          :min="slider.min"
          :max="slider.max"
          :step="slider.step"
          :value="slider.value"
          class="slider w-full h-1 rounded-full appearance-none cursor-pointer bg-gray-700"
          :style="{
            background: `linear-gradient(to right, #3b82f6 ${pct(
              slider
            )}%, #374151 ${pct(slider)}%)`,
          }"
          @input="
            slider.onUpdate(Number(($event.target as HTMLInputElement).value))
          "
        />
      </div>
    </div>
  </UCard>
</template>

<style scoped>
/* .slider {
  background: linear-gradient(
    to right,
    #3b82f6 0%,
    #3b82f6 var(--pct),
    #374151 var(--pct),
    #374151 100%
  );
} */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  border: 3px solid #3b82f6;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
}
.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  border: 3px solid #3b82f6;
  cursor: pointer;
}
</style>
