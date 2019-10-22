<template>
<div class="right">
    <h3>{{$route.name}}</h3>
    <router-view></router-view>
</div>
</template>
<script>
import API from '../comment/js/API'
export default {

}
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
.right
    flex 1
h3
    font-size $larger
    line-height 60px
    margin-left 20px
    color $second
</style>