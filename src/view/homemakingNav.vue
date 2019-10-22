<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="家政banner" name="first">
      <v-homemakingBanner></v-homemakingBanner>
    </el-tab-pane>
    <el-tab-pane label="人员管理" name="second">
      <v-homemakingManage></v-homemakingManage>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import API from "../comment/js/API";
import vHomemakingBanner from './homemakingBanner'
import vHomemakingManage from './homemakingManage'
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  components:{
    vHomemakingBanner,
    vHomemakingManage
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>