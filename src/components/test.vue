<template>
  <div class="model">
    {{value}}
    <input type="text" v-model="value" @input="updata">
  </div>
</template>
<style lang="less">
.model{
  width:50px;
  height:50px;
  border:1px solid red;
}
</style>
<script>
    export default {
        props:['value'],
        methods:{
          updata(){
              this.$parent.$emit('input',this.value)
          }
        }
    }
</script>
