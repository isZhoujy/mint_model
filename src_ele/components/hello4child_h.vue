<template>
  <div>
    会员中心
  </div>
</template>
<style lang="less">

</style>
<script>
    export default {
      mounted(){
        var otaber = document.querySelector('.myself');
        otaber.style.bottom = 0
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','会员中心');
          vm.$store.commit('changeshowBar',true);
          setTimeout(()=>{
            vm.$store.commit('changeTaber',false)
          })
        })
      },
      beforeRouteLeave (to, from, next) {
        var otaber = document.querySelector('.myself');
        otaber.style.bottom = 52+'px'
        this.$store.commit('changetit','我的');
        this.$store.commit('changeTaber',true);
        next()
      },
    }
</script>
