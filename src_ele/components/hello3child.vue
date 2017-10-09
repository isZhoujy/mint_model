<template>
  <div class="childhello">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="item in data">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<style>
.childhello{
  position: absolute;
  background:white;
  width:100%;
  height:100%;
  top:0;
}
</style>
<script>
    export default {
      data() {
        return {
          data: [1,2,3,4,5,6,7,8,9,10]
        }
      },
      created() {
      },
      methods: {
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','hello3child');
          vm.$store.commit('changeshowBar',true);
          vm.$store.commit('changeTaber',false)
        })
      },
      beforeRouteLeave (to, from, next) {
        this.$store.commit('changetit','hello3');
        this.$store.commit('changeshowBar',false);
        this.$store.commit('changeTaber',true);
        next()
      },
    }
</script>
