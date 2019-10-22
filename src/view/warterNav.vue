<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="水站" name="first">
      <v-waterManage></v-waterManage>
    </el-tab-pane>
    <el-tab-pane label="水站评论" name="second">
      <v-waterComment></v-waterComment>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import API from "../comment/js/API";
import vWaterManage from "../view/waterManage";
import vWaterComment from "../view/waterComment";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components:{
    vWaterManage,
    vWaterComment
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>