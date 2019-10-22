<template>
<div class="left">
    <router-link to="/index/manage" active-class="select" v-if="admin==0">管理员管理</router-link>
    <router-link to="/index/banner" active-class="select">banner管理</router-link>
    <router-link to="/index/family" active-class="select">家教管理</router-link>
    <router-link to="/index/water" active-class="select">水站管理</router-link>   
    <router-link to="/index/maintain" active-class="select">维修管理</router-link>
    <router-link to="/index/homemaking" active-class="select">家政管理</router-link>
    <router-link to="/index/changePass" active-class="select">修改密码</router-link>
</div>
</template>
<script>
import API from '../comment/js/API'
export default {
    data() {
        return {
            admin:this.$store.state.admin
        }
    },

}
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
.left
    width 200px
    background $third
    a
        display block
        width 190px
        height 30px
        margin 5px
        line-height 30px
        text-align center
        text-decoration none
        color black
</style>