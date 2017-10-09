<template>
  <div class="loading">
    <img src="./edit.svg" alt="">
  </div>
</template>
<style lang="less">
  .loading {
    position: fixed;
    z-index: 9998;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
    img{
      position: fixed;
      top: 50%;
      left: 50%;
      margin-left: -20px;
      margin-top: -20px;
      z-index: 9999;
      width: 40px;
      height: 40px;
    }
  }
  svg {
    height: 120px;
    width: 120px;
    margin: 0 2em 2em;
    overflow: visible;
    /*   border: 1px solid red; */
  }


</style>
<script>
    export default {}
</script>
