<template>
  <div class="warp">
    <v-header></v-header>
    <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>
<script>
import API from "../comment/js/API";

import vHeader from "../view/header";
import vLeft from "../view/left";
import vRight from "../view/right";

export default {
  components: {
    vHeader,
    vLeft,
    vRight
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
.warp
    width 100vw
    height 100vh
    display flex
    flex-direction column
    .main
        flex 1
        display flex
    
</style>