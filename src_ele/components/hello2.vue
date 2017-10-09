<template>
  <div class="search">
    <div class="inpwrap">
      <input type="text" placeholder="请输入商家或美食名称" v-model="inpVal"><x-icon @click="closee" v-show="close" type="ios-close" style="fill:#666;position: absolute;right: 27vw;top: 5vw;" size="30"></x-icon>
      <x-button type="primary" text="提交" mini @click.native="search"></x-button>
    </div>
    <div class="searchcon" v-show="searchCon">
      很抱歉 ! 无搜索结果
    </div>
    <section v-if="searchList.length&&searchState">
      <div class="tit">搜索历史</div>
      <ul>
        <li v-for="(item,index) in searchList" :key="index" @click="historyInp(item)">
          {{item}}
          <x-icon type="ios-close-empty" size="30" @click.stop="deletItem(item)" style="position: absolute;right: 2vw;top: 4vw;width: 7vw;height:7vw;"></x-icon>
        </li>
      </ul>
      <footer @click="clearInp">
        清空搜索历史
      </footer>
    </section>
    <!--<group title="max is alias to maxlength">-->
      <!--<x-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></x-input>-->
    <!--</group>-->
  </div>
</template>
<script>
  import {XButton,Group,XInput} from 'vux';
  export default {
      components:{
        XButton,
        Group,
        XInput
      },
        data(){
            return {
              items: [],
              searchList:[],
              adress:'',
              inpVal:'',
              close:false,
              searchCon:false,
              searchState:true,
            }
        },
      mounted(){
            this.searchList = JSON.parse(localStorage.getItem('searchList'))||[];
      },
    watch:{
      inpVal(n,o){
          if(n){
            this.close = true
          }else{
            this.close = false;
            this.searchCon = false;
            this.searchState = true;
          }
      }
    },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','搜索');
          vm.$store.commit('changeshowBar',true);
          vm.$store.commit('changeTaber',true);
        })
      },
      beforeRouteLeave(to, from, next){
          next();
      },
      methods:{
        closee(){
          this.inpVal = '';
          this.searchCon = false;
          this.searchState = true;
        },
        search(){
          this.$store.commit('updateLoadingStatus', {isLoading: true});
          setTimeout(()=>{
            this.$store.commit('updateLoadingStatus', {isLoading: false});
            if(!this.inpVal) return;
            this.searchCon = true;
            this.searchState = false;
            if(this.searchList.indexOf(this.inpVal)>-1) return ;
            this.searchList.push(this.inpVal);
            localStorage.setItem('searchList',JSON.stringify(this.searchList));
          },1000)
        },
        clearInp(){
            this.searchList = [];
            localStorage.setItem('searchList','')
        },
        deletItem(item){
            var index = this.searchList.indexOf(item);
            this.searchList.splice(index,1);
            localStorage.setItem('searchList',JSON.stringify(this.searchList))
        },
        historyInp(item){
            this.inpVal = item;
            this.search();
        }
      }
    }
</script>
<style lang="less" scoped>
  section{
    .tit{
      height: 13vw;
      line-height:13vw;
      padding-left:5vw;
      font-size:5vw;
      font-weight:600;
    }
    li{
      height: 15vw;
      position: relative;
      line-height:15vw;
      padding-left:2vw;
      border-bottom:1px solid #e4e4e4;
      background: #fff;
      font-size:4vw;
    }
    footer{
      line-height:13vw;
      background: #ffffff;
      text-align: center;
      font-weight:600;
      color: #3190e8;
      font-size:5vw;
    }
  }
  .searchcon{
    font-size:18px;
    text-align: center;
    height:15vw;
    line-height:15vw;
    background: #fff;
    border-top:1px solid #e4e4e4;
  }
  .search{
    background:#f5f5f5
  }
  .inpwrap {
    position: relative;
    background: #fff;
    padding: 15px;
    display: flex;
    .weui-btn_primary{
      background-color: #3190e8;
      &:active{
        background-color: #3190e8!important;
      }
    }
    input{
      flex:4;
      border:1px solid #e4e4e4;
      color: #333;
      -webkit-border-radius:5px;
      -moz-border-radius:5px;
      border-radius:5px;
      padding:0 10px;
      background:#f2f2f2;
      font-size:5vw;
      height:10vw;
      outline:none;
    }
    button{
      flex:1;
      margin-left:20px;
      font-size:5vw;
      height:10vw;
      padding:0;
      white-space: nowrap;

    }
  }
</style>
