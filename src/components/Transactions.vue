<template>
    <div>
        <el-button type="primary" class="addTransaction" @click="addTransaction">Add transaction</el-button>
        <h3> Transactions </h3>
        <el-table
            border
            stripe
            :data="transactions"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="Date"
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date | moment('DD/MM/YY') }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
            <el-table-column
                prop="value"
                label="Value">
                <template slot-scope="scope">
                    <i class="el-icon-money"></i>
                    <span style="margin-left: 10px">{{ scope.row.value | formatMoney }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState([
      'transactions'
    ]),
    ...mapGetters([
      'currentBalance'
    ])
  },
  methods: {
    addTransaction () {

    }
  }
}
</script>
<style scoped>
    .addTransaction {
        float: right;
    }
</style>
