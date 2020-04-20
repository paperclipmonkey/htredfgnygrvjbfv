<template>
    <div class="owner">
        <h3 class="name"> {{owner.name}} </h3>
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
  .name, .email {
    text-align: center;
  }

  /* 90s style */
  .owner {
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
  }
  .email {
  display: inline-block;
  padding-left: 100%;
  will-change: transform;
  /* show the marquee just outside the paragraph */
  animation: marquee 8s linear infinite;
  }

  .email:hover {
    animation-play-state: paused
  }

  /* Make it move */

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

</style>
