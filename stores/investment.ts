import { defineStore } from 'pinia'

export interface InvestmentState {
  monthlyInvest: number
  years: number
  rate0050: number
  rate2x: number
}

export const useInvestmentStore = defineStore('investment', {
  state: (): InvestmentState => ({
    monthlyInvest: 3000,
    years: 20,
    rate0050: 10,
    rate2x: 15,
  }),

  actions: {
    setMonthlyInvest(val: number) {
      this.monthlyInvest = val
    },
    setYears(val: number) {
      this.years = val
    },
    setRate0050(val: number) {
      this.rate0050 = val
    },
    setRate2x(val: number) {
      this.rate2x = val
    },
  },
})
