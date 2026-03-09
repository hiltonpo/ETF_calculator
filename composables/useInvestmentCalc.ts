import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useInvestmentStore } from '~/stores/investment'

// ── Formatters ──────────────────────────────────────────────────────────────

export function formatTWDFull(val: number): string {
  return `$${Math.round(val).toLocaleString()}`
}

export function formatTWDShort(val: number): string {
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`
  return `$${Math.round(val).toLocaleString()}`
}

// ── Core Formula ─────────────────────────────────────────────────────────────
// Future Value of an ordinary annuity (monthly DCA, compounded monthly)

export function calcFV(monthly: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12
  const n = years * 12
  if (r === 0) return monthly * n
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
}

// ── Composable ───────────────────────────────────────────────────────────────

export function useInvestmentCalc() {
  const store = useInvestmentStore()
  const { monthlyInvest, years, rate0050, rate2x } = storeToRefs(store)

  const totalCost = computed(() => monthlyInvest.value * 12 * years.value)

  const fv0050 = computed(() => calcFV(monthlyInvest.value, rate0050.value, years.value))
  const fv2x   = computed(() => calcFV(monthlyInvest.value, rate2x.value,   years.value))

  const profit0050 = computed(() => fv0050.value - totalCost.value)
  const profit2x   = computed(() => fv2x.value   - totalCost.value)

  const mult0050 = computed(() => fv0050.value / totalCost.value)
  const mult2x   = computed(() => fv2x.value   / totalCost.value)

  const diffVal  = computed(() => fv2x.value - fv0050.value)
  const diffMult = computed(() => fv2x.value / fv0050.value)

  // Chart series: one data point per year from 0..years
  const chartData = computed(() => {
    const labels: string[] = []
    const series0050: number[] = []
    const series2x:   number[] = []
    const seriesCost: number[] = []

    for (let y = 0; y <= years.value; y++) {
      labels.push(y === 0 ? '現在' : `第${y}年`)
      series0050.push(Math.round(calcFV(monthlyInvest.value, rate0050.value, y)))
      series2x.push(  Math.round(calcFV(monthlyInvest.value, rate2x.value,   y)))
      seriesCost.push(monthlyInvest.value * 12 * y)
    }

    return { labels, series0050, series2x, seriesCost }
  })

  return {
    // store refs (for sliders)
    monthlyInvest,
    years,
    rate0050,
    rate2x,
    // store actions
    setMonthlyInvest: store.setMonthlyInvest,
    setYears:         store.setYears,
    setRate0050:      store.setRate0050,
    setRate2x:        store.setRate2x,
    // computed results
    totalCost,
    fv0050,
    fv2x,
    profit0050,
    profit2x,
    mult0050,
    mult2x,
    diffVal,
    diffMult,
    chartData,
    // formatters (re-exported for convenience)
    formatTWDFull,
    formatTWDShort,
  }
}
