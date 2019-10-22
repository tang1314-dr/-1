<template>
<div>
    <v-maintainNav></v-maintainNav>
</div>
</template>
<script>
import API from '../comment/js/API'
import vMaintainNav from'../view/maintainNav'
export default {
    components:{
        vMaintainNav
    }
}
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>