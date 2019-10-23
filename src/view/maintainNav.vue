<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="nav">
    <el-tab-pane label="维修" name="first">
      <v-maintainManage></v-maintainManage>
    </el-tab-pane>
    <el-tab-pane label="维修评论" name="second">      
      <v-maintainComment></v-maintainComment>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import API from "../comment/js/API";
import vMaintainComment from "../view/maintainComment";
import vMaintainManage from "../view/maintainManage";

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
  components: {
    vMaintainComment,
    vMaintainManage
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>
