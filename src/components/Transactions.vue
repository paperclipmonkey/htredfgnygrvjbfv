<template>
    <div>
        <el-button type="primary" class="addTransaction" @click="openAddTransaction">Add transaction</el-button>
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

        <!-- Available balance view -->
        <el-dialog
            title="Add Transaction"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form>
                <el-switch
                v-model="transaction.deposit"
                active-text="Deposit"
                inactive-text="Withdrawal">
                </el-switch>
                <el-form-item label="Transaction name">
                    <el-input placeholder="E.g. Lockdown shop" v-model="transaction.name"></el-input>
                </el-form-item>
                <el-form-item label="Transaction value">
                    <el-input-number v-model="transaction.value" :precision="2" :step="10"></el-input-number>
                </el-form-item>
                <el-form-item label="Transaction date">
                    <el-date-picker
                        v-model="transaction.date"
                        type="date"
                        placeholder="Pick a day">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div class="danger" v-if="!transaction.deposit && availableBalance < (transaction.value * 100)">
                You cannot withdraw over your account limit.
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button :disabled="!transaction.deposit && availableBalance < (transaction.value * 100)" type="primary" @click="saveTransaction">Add</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

const baseTransaction = {
  deposit: true,
  name: '',
  value: 10,
  date: new Date()
}

export default {
  data () {
    return {
      dialogVisible: false,
      transaction: {
        deposit: true,
        name: '',
        value: 10,
        date: new Date()
      }
    }
  },
  computed: {
    ...mapGetters({
      transactions: 'orderedTransactions',
      availableBalance: 'availableBalance'
    })
  },
  methods: {
    ...mapActions(['addTransaction']),
    openAddTransaction () {
      this.dialogVisible = true
    },
    handleClose () {
      // Reset form
      this.transaction = JSON.parse(JSON.stringify(baseTransaction))
      this.dialogVisible = false
    },
    saveTransaction () {
      this.dialogVisible = false
      // If a withdrawal, reverse the number
      if (!this.transaction.deposit) this.transaction.value = ~this.transaction.value + 1
      this.addTransaction(this.transaction)
      this.transaction = JSON.parse(JSON.stringify(baseTransaction))
    }
  }
}
</script>
<style scoped>
    .addTransaction {
        float: right;
    }

    /* 90s theme */
    .addTransaction {
        background: red;
        border-radius: 0;
    }
</style>
