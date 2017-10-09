<template>
  <div>
    <scroller height="100%" lockX :bounce=true :use-pulldown=true ref="scroll4">
      <div>
        <h1>hello2222222</h1>
        <router-link to="/hellochild" tag="h1">hellolink</router-link>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
        <h1>hello2222222</h1>
      </div>

    </scroller>
  </div>
</template>
<style>

</style>
<script>
    export default {
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','hello2');
          vm.$store.commit('changeshowBar',false);
          vm.$store.commit('changeTaber',true);
        })
      },
    }
</script>
