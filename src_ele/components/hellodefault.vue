<template>
  <div class="hellodefault">
    <x-icon class="iconfonts" type="ios-arrow-left" size="30" @click="goback"></x-icon>
    <div class="header">
      <img class="background" src="../assets/default.jpg" alt="">
      <div class="headcon">
        <div class="tit">
          <img src="../assets/default.jpg" alt="">
          <div class="context">
            <h2>修改测试</h2>
            <p>商家配送/分钟必答/配送费￥5</p>
            <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
            <x-icon class="iconfontr" type="ios-arrow-right" size="30" @click="goback"></x-icon>
          </div>
        </div>
        <div class="footnotice">
          <p class="fl"><i>减</i> 满30减5，满60减8（app专享）</p>
          <p class="fr">4个活动
            <x-icon style="fill:#fff;vertical-align: sub" type="ios-arrow-right" size="20" @click="goback"></x-icon></p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="shopcart">
        <div class="circle">

        </div>
      </div>
      <div class="head">
        <p @click="changeheadtab(0)"><span :class="{'active':headActive==0}">商户</span></p>
        <p @click="changeheadtab(1)"><span :class="{'active':headActive==1}">名称</span></p>
      </div>
      <div class="maincontent">
        <div class="mainleft">
          <scroller height="100%" lockX :bounce=false ref="scrollleft" @on-scroll="scrollleft">
            <div class="lefttransition">
              <p v-for="i in leftlength">{{i}}</p>
            </div>
          </scroller>

        </div>
        <div class="mainright">
          <scroller height="100%" lockX :bounce=false ref="scrollright" @on-scroll="scrollright">
          <div class="righttransition">
            <p v-for="item in rightlength">{{item}} <i class="small" @click="smallball($event)">+</i></p>
          </div>
          </scroller>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
          headActive:0,
          leftlength:20,
          rightlength:20,
          arrleft:[],
          arrright:[],
          leftsttate:true,
          status:true,
        }
    },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      vm.$store.commit('changeHead',false);
      vm.$store.commit('changeTaber',false);
    })
  },
  mounted(){
      var _this = this;
      Array.from(document.querySelectorAll('.lefttransition>p')).forEach(function(v){
        _this.arrleft.push(v.offsetTop)
      });
      Array.from(document.querySelectorAll('.righttransition>p')).forEach(function(v){
        _this.arrright.push(v.offsetTop)
      });
  },
  methods:{
    goback(){
      window.history.go(-1)
    },
    changeheadtab(index){
        this.headActive = index;
    },
    smallball(event){
      var oSmall = document.createElement('div');
      var oitem = document.createElement('div');
      oSmall.className = 'smallball';
      oitem.className = 'item';
      oSmall.appendChild(oitem);
      document.body.appendChild(oSmall);
      oSmall.style.top = event.clientY-7+'px';
      oSmall.style.left = event.clientX-7+'px';
      var tranwidth = 830-event.clientY;
      var tranheight = 40-event.clientX;
        var status = true;
      oSmall.addEventListener('transitionend',function(){
          if(status){
            document.body.removeChild(this)
            status = false;
          }
      });
      setTimeout(function(){
        oSmall.style.transform = 'translateY('+tranwidth+'px)';
        oitem.style.transform = 'translateX('+tranheight+'px)';
      },100)
    },
    scrollleft(position){
        console.log(position.top);
     /*   if(position.top>=580){
          this.leftsttate = false;
        }else{
          this.leftsttate = true;
        }*/
    },
    scrollright({top}){
//        console.log(top);
        var _this = this;
        this.arrright.forEach(function(v,i,arr){
          if(top>arr[i] && top<arr[i+1] && _this.leftsttate){
              var topdefault = _this.arrleft[i];
            _this.$refs.scrollleft.reset({top:topdefault},500,'ease')
          };
          if(!_this.leftsttate){
            _this.$refs.scrollleft.reset({top:580},500,'ease')
          }
        })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hellodefault{
  position: absolute;
  top:0;
  bottom:0;
  .main{
    position: absolute;
    width:100%;
    top:30vw;
    bottom:0;
    .shopcart{
      position: fixed;
      bottom:0;
      width:100%;
      height:15vw;
      background: #d9d9d9;
      z-index:100;
      .circle{
        width:70px;
        height:70px;
        border-radius:50%;
        background: #787878;
        position: absolute;
        bottom:0;
        left:20px
      }
    }
    .maincontent{
      position: absolute;
      width:100%;
      top:15vw;
      bottom:15vw;
      .mainleft{
        overflow: auto;
        position: absolute;
        width:26vw;
        background: #eaeaea;
        top:0;
        bottom:0;
        p{
          line-height:15vw;
          border-bottom:1px solid #c8c8cd;
        }
      }
      .mainright{
        overflow: auto;
        position: absolute;
        width:74vw;
        top:0;
        bottom:0;
        right:0;
        p{
          position: relative;
          line-height:40vw;
          border-bottom:1px solid #c8c8cd;
          .small{
            background: deepskyblue;
            color: white;
            position: absolute;
            bottom:10px;
            right:20px;
            width:4vw;
            height:4vw;
            line-height:4vw;
            text-align: center;
            border-radius:50%;
            &:active{
              box-shadow:inset 0 0 5px #787878;
            }
          }
        }
      }
    }
    .head{
      height:10vw;
      border-bottom:1px solid #ebebeb;
      padding-top:5vw;
      display: flex;
      p{
        flex:1;
        text-align: center;
        span{
          font-size:4vw;
          &.active{
            color: #4b8bf4;
            border-bottom:3px solid #4b8bf4;
            padding-bottom:1vw;
          }
        }
      }
    }
  }
  .header{
    position:relative;
    height:30vw;

    overflow: hidden;
    .headcon{
      .footnotice{
        margin-top:2vw;
        font-size:3vw;
        color: #fff;
        .fl i{
          display: inline-block;
          background: rgb(240, 115, 115);
          padding:0 1vw;
          border-radius: 5px;
        }
      }
      position: absolute;
      top:0;
      padding:3vw 3vw;
      width:95%;
      height:80%;
      .tit{
        display: flex;
        .context {
          position: relative;
          .iconfontr{
            fill:#fff;
            position: absolute;
            right:0;
            top:40%;
          }
            flex:1;
          h2{
            font-size:5vw;
            color: #ffffff;
          }
          p{
            font-size:3vw;
            color: #ffffff;
          }
        }
        img{
          width:17vw;
          height:17vw;
          border-radius:5px;
          margin-right:2vw;
        }
      }

    }
    .background{
      width:100%;
      filter: blur(8px);
    }
  }
}
  .iconfonts{
    position: absolute;
    top:0;
    fill:#fff;
    z-index:10;
  }
</style>
