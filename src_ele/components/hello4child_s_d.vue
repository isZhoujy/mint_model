<template>
  <div>
    <p v-text="content"></p>
    <svg class="icon" width="100px" height="100.00px" viewBox="0 0 1024 1024" version="1.1"><path fill="#ff0" d="M325.233316 418.621263h93.383854v-93.378737h-93.383854v93.378737z m420.22376-280.138258H278.541901c-77.360925 0-140.073222 62.711274-140.073223 140.068105v466.896756c0 77.356832 62.714344 140.068106 140.073223 140.068106h466.915175c77.360925 0 140.073222-62.712297 140.073222-140.068106V278.552134c0.001023-77.357855-62.712297-140.069129-140.073222-140.069129z m46.692439 606.964861c0 25.78527-20.905122 46.689369-46.691416 46.689369H278.541901c-25.786293 0-46.691415-20.904099-46.691416-46.689369V278.552134c0-25.78527 20.904099-46.689369 46.691416-46.689369h466.915175c25.78527 0 46.691415 20.904099 46.691415 46.689369l0.001024 466.895732zM325.233316 698.757474h93.383854v-93.378737h-93.383854v93.378737z m0-140.068105h93.383854V465.310631h-93.383854v93.378738z m140.075269-140.068106h233.457076v-93.378737h-233.457076v93.378737z m0 140.068106h233.457076V465.310631h-233.457076v93.378738z m0 140.068105h233.457076v-93.378737h-233.457076v93.378737z"/></svg>
  </div>
</template>
<style lang="less" scoped>
p{
  font-size:20px;
}
</style>
<script>
    export default {
        computed:{
            content(){
                var index = this.$store.state.index.fuwuDefaultIndex;
                console.log(index)
                return this.$store.state.index.fuwuDefaultList[index];
            }
        },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
            var titleIndex = vm.$store.state.index.fuwuDefaultIndex;
          vm.$store.commit('changetit',vm.$store.state.index.fuwuDefaultTit[titleIndex]);
          vm.$store.commit('changeshowBar',true);
          setTimeout(()=>{
            vm.$store.commit('changeTaber',false)
          })
        })
      },
      beforeRouteLeave (to, from, next) {
        this.$store.commit('changetit','服务中心');
        next()
      },
    }
</script>
