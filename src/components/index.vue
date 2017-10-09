<template>
  <div class="index">
      <ul class="item"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="i in list" class="list" @click="jump">{{i}}</li>
        <p class="loadingmore">加载中</p>
      </ul>
   <!-- <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <router-view class="viewsub"></router-view>
    </transition>-->
  </div>
</template>
<style lang="less">
.index{
  .list{
    line-height:40px;
    &:nth-of-type(2n-1){
      background: #c9c9c9;
    }
  }
  .loadingmore{
    line-height: 50px;
    text-align: center;
  }
}
</style>
<script>
    export default {
        data(){
            return {
              selet:'hello',
              list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
            }
        },
//      beforeRouteEnter (to,from,next){
//          setTimeout(()=>{
//            var scrollDom = document.querySelector('.index');
//            scrollDom.scrollTop = to.meta.scrollNum;
//          });
//          next();
//      },
      components:{
      },
      methods:{
        jump(){
            this.$router.push('/indexsub');
        },
        loadMore() {
          this.loading = true;
          setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
          }, 2500);
        }
      }
    }
</script>
