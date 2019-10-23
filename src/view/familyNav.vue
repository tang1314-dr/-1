<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="nav">
    <el-tab-pane label="家教banner" name="first">
      <v-familyBanner></v-familyBanner>
    </el-tab-pane>
    <el-tab-pane label="家教类型" name="second">
      <v-familyType></v-familyType>
    </el-tab-pane>
    <el-tab-pane label="家教排行" name="third">
       <v-familyTop></v-familyTop>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import API from "../comment/js/API";
import vFamilyBanner from "../view/familyBanner";
import vFamilyType from "../view/familyType";
import vFamilyTop from "../view/familyTop";
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
  components: {
    vFamilyBanner,
    vFamilyType,
    vFamilyTop
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>
