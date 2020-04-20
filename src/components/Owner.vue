<template>
    <div>
        <h3 class="owner"> {{owner.name}} </h3>
        <h4 class="email"> {{owner.email}} </h4>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    //   name: 'Joe Bloggs'
    }
  },
  computed: {
    ...mapState({
      owner: 'owner'
    })
  }
}
</script>
<style scoped>
  .owner, .email {
    text-align: center;
  }
</style>
