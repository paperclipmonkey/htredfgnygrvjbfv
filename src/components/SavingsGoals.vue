<template>
    <div>
        <h3> Savings Goals </h3>
        <div class="goal" :class="{success: currentBalance >= goal.amount, danger: currentBalance < goal.amount}" v-for="goal in goals" :key="goal.amount">
            <span class="amount">Goal: {{goal.amount | formatMoney}}</span>
            <span class="difference">Difference: {{currentBalance - goal.amount | formatMoney}}</span>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'goals'
    ]),
    ...mapGetters([
      'currentBalance'
    ])
  }
}
</script>
<style scoped>
  .goal {
    border-bottom: 1px solid #DDD;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
