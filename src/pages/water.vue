<template>
<div>
    <v-warterNav></v-warterNav>
</div>
</template>
<script>
import API from '../comment/js/API'
import vWarterNav from'../view/warterNav'

export default {
    components:{
        vWarterNav,
    }
}
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>