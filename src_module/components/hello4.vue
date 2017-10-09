<template>
  <div>
    <scroller height="100%" lockX :bounce=true :use-pulldown=true :use-pullup=upState ref="scroll4" :pulldown-config="downconfig" @on-pulldown-loading="downaction" @on-pullup-loading="upaction">
      <div class="box1">
        <div class="box1-item" v-for="i in num"><span>{{' ' + i + ' '}}</span></div>

      </div>
      <div style="text-align: center" v-if="!upState">没有更多数据</div>
    </scroller>
  </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                num:10,
                upState:true,
              downconfig:{
                content: 'Pull Down To Refresh',
                height: 60,
                autoRefresh: false,
                downContent: '下拉刷新',
                upContent: '释放刷新',
                loadingContent: '<i class="icon-spinner"></i>',
                clsPrefix: 'xs-plugin-pulldown-'
              }
            }
        },
      beforeRouteEnter (to, from, next) {
        /* if(this.$store.state.scrolltop!=0){
         document.body.scrollTop = this.$store.state.scrolltop
         }*/
        next(vm=>{
          vm.$store.commit('changetit','hello4');
          vm.$store.commit('changeshowBar',false);
        })
      },
      mounted(){
        this.uploadstart();
      },
      methods:{
          uploadstart(){
            var oivew = document.querySelector('.child-view');
            var obox = document.querySelector('.box1');
            var _this = this;
            if(obox.clientHeight<oivew.clientHeight){
              _this.upaction();
            };
          },
        downaction(){
          this.num=10;
            setTimeout(()=>{
              this.$refs.scroll4.donePulldown();
              this.uploadstart();
            },500)
        },
        upaction(){
          this.num+=10;
          var oivew = document.querySelector('.child-view');
          var obox = document.querySelector('.box1');
          setTimeout(()=>{
            this.$refs.scroll4.donePullup();
            this.$refs.scroll4.reset();
            if(obox.clientHeight<oivew.clientHeight){
                this.upaction();
            }
          })
        },
      }
    }
</script>
