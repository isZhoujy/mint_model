<script src="main.js"></script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
.smallball{
  transition:transform 1s cubic-bezier(0.3, -0.6, 0.7, -0.15);

  position: fixed;
  z-index:99;
}
.smallball .item{
  width:4vw;
  height:4vw;
  border-radius:50%;
  background: deepskyblue;
  transition:transform 1s linear;
}
body,html {
  background-color: #fbf9fe;
  width:100%;
}
  #app{
    width:100%;
    height:100%;
  }
  .childPages{
    bottom:0!important;
  }
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
</style>
