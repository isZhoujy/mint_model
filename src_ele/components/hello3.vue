<template>
  <div>
    <h1 @click="changeAction">3333333333</h1>
    <div>
      <transition name="bounce">
        <p v-show="isshow">动画效果在这里</p>
      </transition>
    </div>
    <numlist nunm="789564"></numlist>
    <numlist nunm="123"></numlist>

    <div class="borderimg">
      <p @click="change">jump page</p>
    </div>
    <div style="height:300px">

    </div>

    <transition name="slidelist">
    <router-view class="childhello3"></router-view>
    </transition>
  </div>
</template>
<style lang="less">
  .borderimg{
    width: 200px;
    height:200px;
    border:1px solid;
    margin:20px;
    border-image: -webkit-linear-gradient( blue 10%, #ccc 50%) 30 31;
  }
  .childhello3{
    transition: all .5s;
  }
  .slidelist-enter  {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slidelist-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
</style>
<script>
  import numlist from './moveNum.vue';
  import {mapState} from 'vuex'
    export default {
      components:{
        numlist
      },
        data(){
            return {
              isshow:true,
              numb:5432167,
              items: []
            }
        },
      computed:{
        ...mapState(['direction']),
        umlength(){
            return this.numb.length
        }
      },
      mounted(){
        for (let i = 1; i <= 40; i++) {
          this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.top = 1
        this.bottom = 20
      },
      activated(){
        this.$store.commit('changetit','hello3');
        this.$store.commit('changeshowBar',false);
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','订单列表');
          vm.$store.commit('changeshowBar',true);
          vm.$store.commit('changeTaber',true);
        })
      },
      beforeRouteLeave(to, from, next){
        next();
      },
      methods:{
        change(){
            console.log(123);
            this.$router.push('/hello3child')
        },
        change1(){
            var obox = document.querySelector('.child-view');
          obox.scrollTop = 300
        },
        changeAction(){
            this.isshow = !this.isshow;
            var promise1 = new Promise(function(resolve){
                setTimeout(()=>{
                  resolve('first')
                },1000)
            });
            var promise2 = new Promise(function(resolve){
              setTimeout(()=>{
                resolve('second')
              },3000)
            });
          var promise3 = new Promise(function(resolve){
            setTimeout(()=>{
              resolve('three')
            },2000)
          });
          Promise.all([promise1,promise2,promise3]).then(function(resovearr){
            console.log(resovearr);
//            var map1 = resovearr.map()
          })
        },
        refresh(done) {
          setTimeout(() => {
            let start = this.top - 1
            for (let i = start; i > start - 10; i--) {
              this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
            }
            this.top = this.top - 10;
            done()
          }, 1500)
        },
        infinite(done) {
          console.log('infinite called')
          setTimeout(() => {
            let start = this.bottom + 1
            for (let i = start; i < start + 10; i++) {
              this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.bottom = this.bottom + 10
            done()
          }, 1500)
        },
        onItemClick(index, item) {
          console.log(index)
        }
      }
    }
</script>
