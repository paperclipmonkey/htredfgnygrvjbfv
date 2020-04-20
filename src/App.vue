<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <Transactions/>
        </div>
      </el-col>
      <el-col class="aside" :span="8">
        <div class="grid-content bg-purple">
          <Owner/>
          <Summary/>
          <Goals/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Transactions from '@/components/Transactions'
import Owner from '@/components/Owner'
import Summary from '@/components/Summary'
import Goals from '@/components/SavingsGoals'

export default {
  components: {
    Transactions, Owner, Summary, Goals
  }
}
</script>
<style>
* {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.aside {
  border-left: 1px solid rgb(160, 160, 160);
}
</style>
