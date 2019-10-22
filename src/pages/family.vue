<template>
<div>
    <v-familyNav></v-familyNav>
    <router-view></router-view>
</div>
</template>
<script>
import API from '../comment/js/API'
import vFamilyNav from '../view/familyNav'
export default {
    components:{
        vFamilyNav
    }
}
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>