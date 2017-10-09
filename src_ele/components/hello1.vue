<template>
  <div>
    <div class="scrollerwrap">
      <scroller height="100%" style="background:#f5f5f5;" lockX :bounce=false
                 :use-pulldown=false
                 :use-pullup=true
                 ref="scrollerBottom"
                 :pullup-config="pullupconfig" @on-pullup-loading="upmore">
        <div>
          <nav>
            <swiper height="50vw" style="padding-bottom: 7vw;border-bottom: 1px solid #e4e4e4" loop
                    v-model="indexSwipe"
                    @on-index-change="onIndexChange">
              <swiper-item class="swipehead" v-for="(item,index) in swipeLens" :key="index">
                <div class="imgwrap" v-for="(item1,index1) in headlist" v-if="index==0&&index1<8||index==1&&index1>=8"
                     :key="index1"><figure><img :src="'https://fuss10.elemecdn.com'+item1.image_url">
                  <figcaption v-text="item1.title"></figcaption></figure></div>
              </swiper-item>
            </swiper>
          </nav>
          <div style="border-top:1px solid #e4e4e4;background: white;">
            <li class="itemList" v-for="item in mainList" :key="item.id" @click="jumpdefualt">
              <div class="left">
                <img :src="'http://images.cangdu.org/'+item.image_path" alt="">
              </div>
              <div class="right">
                <div class="rhead clearfix">
                  <h4>{{item.name}}</h4>
                  <ul class="supports" v-if="item.supports.length">
                    <li v-for="i in item.supports">{{i.icon_name}}</li>
                  </ul>
                </div>
                <div class="rmid clearfix">
                  <div class="rantings">
                    <div class="rants">
                      <div style="display: inline-block; transform: scale(0.8);margin-left:-3vw">
                        <!--<m-star :score="item.rating"></m-star>-->
                        <rater v-model="item.rating" slot="value" disabled :margin=0 :fontSize=15></rater>
                      </div>
                      <span style="margin:-3px 1vw 0 -2vw;font-size: 11px;color: #ff6000;">{{item.rating}}</span>
                    </div>
                    <div class="ranttxt" style="font-size: 12px;margin-top: 4px;">
                      月售{{item.recent_order_num}}单
                    </div>
                  </div>
                  <div class="kuaidi">
                    <span class="kuaidi_left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
                    <span class="kuaidi_right" v-if="item.is_premium">准时达</span>
                  </div>
                </div>
                <div class="rbot">
                  <div class="bot_left">
                    ¥{{item.float_minimum_order_amount}}起送/配送费约￥{{item.float_delivery_fee}}
                  </div>
                  <div class="bot-right">
                    <span>{{item.distance}}</span> / <span style="color: #3190e8;">{{item.order_lead_time}}</span>
                  </div>
                </div>
              </div>
            </li>
            <p v-if="ifstatus" style="font-weight: 600; text-align: center;line-height:36px;height: 36px;">没有更多了</p>
          </div>

        </div>

      </scroller>
    </div>
    <!--<load-more tip="正在加载"></load-more>-->
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {Loading,LoadMore,Group ,Cell, Clocker,Scroller,Spinner,Qrcode,Swiper ,SwiperItem,Rater } from 'vux';
  import alert from './compon.vue'
    export default {
      data(){
          return {
            indexSwipe:0,
            isLoading:false,
            ifstatus:false,
            score:5,
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
        Qrcode,
        Swiper,
        Rater,
        SwiperItem
      },
        mounted(){
          var _this = this;
          var obj = {
              num:0,
              fn:function(){
                setTimeout(()=>{
                  _this.$refs.scrollerBottom.reset()
                  _this.$store.commit('updateLoadingStatus', {isLoading: false});
                })
              }
          }
          this.$store.dispatch('getHead');
          this.$store.commit('updateLoadingStatus', {isLoading: true});
          this.$store.dispatch('getMainlist',obj);
        },
      computed:{
        ...mapState({
          headlist:(state)=>{
            return state.index.headList
          },
          mainList:(state)=>{
              return state.index.mainList
          }
        }),
        swipeLens(){
            return this.headlist.length/8
        }
      },
      activated(){
//        console.log('activeted')
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
            console.log(vm.score)
          vm.$store.commit('changetit','首页');
          vm.$store.commit('changeHead',true);
          vm.$store.commit('changeshowBar',false);
          vm.$store.commit('changeTaber',true);
        })
      },
      beforeRouteLeave (to, from, next) {
          this.score = '123'
        next()
      },
      methods:{
        jumpdefualt(){
            this.$router.push('/hellodefault');
        },
          action(){
            this.$vux.loading.show({
              text: '加载中'
            });
            setTimeout(()=>{
              this.$vux.loading.hide()
            },1000)
          },
        onIndexChange(){
            console.log(123)
        },
        upmore(){
            var _this = this;
            var obj = {
                num:20,
                fn:function(){
                  _this.ifstatus = true;
                  setTimeout(()=>{
                    _this.$refs.scrollerBottom.donePullup();
                    _this.$refs.scrollerBottom.reset();
                    _this.$refs.scrollerBottom.disablePullup();
                  })
                }
            }
          this.$store.dispatch('getMainlist',obj);
        }
      }
    }
</script>
<style lang="less">
  nav{
    background:white;
    margin-bottom:15px;
  }
  .vux-slider .vux-indicator-right{
    right:49%!important;
  }
  .swipehead{
    .imgwrap{
      width:25vw;
      padding:2vw 0;
      float: left;
      height:40%;
      text-align: center;
      color: #666;
      img{
        width:56%
      }
    }
  }
  .scrollerwrap{
    position:absolute;
    top:0vw;
    width:100%;
    bottom:0;
  }
  .itemList{
    display: flex;
    border-bottom:1px solid #f1f1f1;
    padding:20px 10px;
  }
  .itemList .left img{
    width:20vw;
    height:20vw;
    margin-right:2vw;
  }
  .itemList .right{
    flex:1;
  }
  .itemList .right h4{
    float: left;
    margin:0;
    font-size:4vw;
  }
  .itemList .right h4:before{
    content: '\54C1\724C';
    display: inline-block;
    font-size: 2vw;
    line-height: 1rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 1vw;
    border-radius: 0.5vw;
    margin-right: 1vw;
  }
  .itemList .right .supports{
    float: right;
    transform:scale(0.8);
    font-size:3vw;
  }
  .itemList .right .supports li{
    float: left;
    list-style-type: none;
    margin-right:8px;
    color: #999;
  }
  .itemList .right .supports li:last-child{
    margin-right:0;}
  .itemList .right .rmid{
    margin-top:3vw;
  }
  .itemList .right .rmid .rantings{
    float: left;
    display: flex;
  }
  .itemList .right .rmid .rantings .rants{

  }
  .itemList .right .rmid .kuaidi{
    float: right;
    display: flex;
    width:auto;
    transform: scale(0.7);
    margin-right:-2vw;
  }
  .itemList .right .rmid .kuaidi_left{
    font-size:3vw;
    padding:2px;
    border-radius:1vw;
    margin-right:0.5vw;
    color: #fff;
    background: #3190e8;
    border:1px solid #3190e8;
  }
  .itemList .right .rmid .kuaidi_right{
    font-size:3vw;
    padding:2px;
    border-radius:1vw;
    color: #3190e8;
    border:1px solid #3190e8;
  }
  .itemList .rbot{
    display: flex;
    justify-content: space-between;
    font-size:10px;
    margin-top:2vw;
  }
</style>
