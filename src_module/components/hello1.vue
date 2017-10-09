<template>
  <div>
    <scroller height="100%" lockX :bounce=true :use-pulldown=true :use-pullup=true ref="scrollerBottom" :pulldown-config="pullconfig" @on-pulldown-loading="pulldown" :pullup-config="pullupconfig">
    <div>
      <p>woshihello123</p>
      <router-link tag="p" to="/hellochild">
        woshihello1
      </router-link>
      <p @click="action">woshihello</p>
      <group title="Use in cell">
        <cell title="Date:08011">
          <clocker time="2017-09-1" slot="value">
            <span style="color:red">%D 天</span>
            <span>%H 小时</span>
            <span>%M 分 %S 秒</span>
          </clocker>
        </cell>
      </group>
      <p><alert type="success">
        <!--<i>asdasd</i>111asdasda-->
        <span slot="test1">123</span>
      </alert></p>
      <p style="color: greenyellow;">woshihello</p>
      <scroller height="200px" lockY ref="scrollerBottom1"><div class="box1">
        <div class="box1-item" v-for="i in 8"><span>{{' ' + i + ' '}}</span></div>
      </div></scroller>

      <p style="color: #da1daa;">woshihello</p>
      <p><spinner type="ios"></spinner></p>
      <p><qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode></p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p>woshihello</p>
      <p @click="upaction">123123132</p>
    </div>
    </scroller>
    <!--<load-more tip="正在加载"></load-more>-->
  </div>
</template>
<style scoped lang="less">
  .box1{
    height:200px;
    width:800%;
    overflow: auto;
    position: relative;
    .box1-item {
      float: left;
      width: 100px;
      height:200px;
      background: #666;
      margin-bottom:20px;
    }
  }
  p{
    line-height:50px;
    border-bottom: 1px solid deeppink;
  }
</style>
<script>
  import {Loading,LoadMore,Group ,Cell, Clocker,Scroller,Spinner,Qrcode  } from 'vux';
  import alert from './compon.vue'
    export default {
      data(){
          return {
            isLoading:false,
            time1: '2017-07-13 21:54',
            ifstatus:true,
            pullconfig:{
              content: '下拉刷新',
              height: 60,
              autoRefresh: false,//刷新当钱页面
              downContent: '<i>下拉刷新</i>',
              upContent: '释放刷新',
              loadingContent: '<i class="weui-loading weui-icon_toast" style="margin: 10px;"></i>',
              clsPrefix: 'xs-plugin-pulldown-'
            },
            pullupconfig:{
              content: '上拉刷新',
              height: 40,
              autoRefresh: false,//刷新当钱页面
              downContent: '<i>释放刷新</i>',
              upContent: '<span style="margin-top: 10px;display: inline-block;">上拉加载更多</span>',
              loadingContent: '<i class="weui-loading weui-icon_toast" style="margin: 0;"></i>',
              clsPrefix: 'xs-plugin-pulldown-'
            }
          }
      },
      components:{
        Loading,
        LoadMore,
        Group ,
        Cell,
        Clocker,
        alert,
        Spinner,
        Qrcode
      },
        mounted(){
          var promise = new Promise((resolve,reject)=>{
            this.$http.get('https://cnodejs.org/api/v1/topics?tab=&mdrender=false&limit=20&page=1&accesstoken=').then(function(data){
              console.log(data.data)
              resolve(data.data)
            })
          })
          promise.then((res)=>{
            this.$refs.scrollerBottom.reset({top: 0});
            console.log('请求完成')
          });

        },
      activated(){
        console.log('activeted')
      },
      beforeRouteEnter (to, from, next) {
        /* if(this.$store.state.scrolltop!=0){
         document.body.scrollTop = this.$store.state.scrolltop
         }*/
        next(vm=>{
          vm.$store.commit('changetit','hello1');
          vm.$store.commit('changeshowBar',false);
          vm.$store.commit('changeTaber',true);
          var oview  = document.querySelector('.child-view');
          if(vm.$store.state.scrolltop!=0){
            oview.scrollTop = vm.$store.state.scrolltop
          }else{
            oview.scrollTop = 0;
          }
        })
      },
      beforeRouteLeave (to, from, next) {
        var oview  = document.querySelector('.child-view');
        var scrollt = oview.scrollTop;
        console.log(oview.scrollTop)
        this.$store.commit('setscroll',scrollt);
        next()
      },
      methods:{
          action(){
            this.$vux.loading.show({
              text: '加载中'
            });
            setTimeout(()=>{
              this.$vux.loading.hide()
            },1000)
          },
        pulldown(){
//          this.$refs.scrollerBottom.reset({top: 100});
          this.$http.get('/topics').then((res)=>{
            this.$refs.scrollerBottom.donePulldown()
          })
        },
        upaction(){
          this.$refs.scrollerBottom.donePullup()
        },
        refresh(){
            console.log('refresh')
        },
        infinite(){
            console.log('infinite')
        },
        touch(){
            console.log('touch')
        },
      }
    }
</script>
