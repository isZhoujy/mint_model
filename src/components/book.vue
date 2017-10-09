<template>
  <div class="book">
    <p v-for="i in 50">我是图书</p>
  </div>
</template>
<style lang="less">
p{
  line-height:40px;
  &:nth-of-type(2n-1){
    background: #ccc;
  }

}
</style>
<script>
    export default {
//      beforeRouteEnter (to,from,next){
//        setTimeout(()=>{
//          var scrollDom = document.querySelector('.book');
//          scrollDom.scrollTop = to.meta.scrollNum;
//        });
//        next();
//      },
    }
</script>
