import Vue from 'vue'

Vue.filter('formatMoney', (value, format = 'uk') => {
  return '£' + (value / 100).toFixed(2)
})
