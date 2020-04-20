<template>
    <div class="summary">
      <h3> Summary </h3>
      <span class="row">
        <dt>Current Balance</dt> <dd>{{currentBalance | formatMoney}}</dd>
      </span>
      <span class="row">
        <dt>Available Balance</dt>
        <dd>{{availableBalance | formatMoney}}</dd>
      </span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'currentBalance',
      'availableBalance'
    ])
  }
}
</script>
<style scoped>
  .row{
    border-bottom: 1px solid #DDD;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  dt::after {
    content: ':';
  }
</style>
