<template>
  <div class="childhello">
    我是Hello3child
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
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','hello3child');
          vm.$store.commit('changeshowBar',true);
        })
      },
      beforeRouteLeave (to, from, next) {
        this.$store.commit('changetit','hello3');
        this.$store.commit('changeshowBar',false);
        next()
      },
    }
</script>
