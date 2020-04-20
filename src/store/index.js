import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: { // Info relating to the account owner
      name: 'Joe Bloggs',
      email: 'joe@bloggs.com'
    },
    goals: [ // Savings goals the user has set up. Helps them keep track of their account
      {
        amount: 400000
      }
    ],
    // FYI - everything in int pennies - for obvious reasons.
    arrangedOverdraft: 25000,
    transactions: [
      {
        date: new Date(),
        name: 'Initial deposit',
        value: 2000 * 100
      }
    ]
  },
  mutations: {
    ADDTRANSACTION (state, transaction) {
      state.transactions.push(transaction)
    }
  },
  actions: {
    addTransaction ({ commit, state }, transaction) {
      transaction.value = transaction.value * 100 // Back to pence
      commit('ADDTRANSACTION', transaction)
    }
  },
  getters: {
    currentBalance (state) {
      // Loop through the ledger to get the current balance
      return state.transactions.reduce((prev, cur) => {
        return prev + cur.value
      }, 0)
    },
    orderedTransactions (state) {
      // Use current balance plus overdraft to get avaiable balance
      return state.transactions.slice().sort((a, b) => b.date - a.date)
    },
    availableBalance (state, getters) {
      // Use current balance plus overdraft to get avaiable balance
      return getters.currentBalance + state.arrangedOverdraft
    }
  },
  modules: {
  }
})
