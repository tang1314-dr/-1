<template>
  <div class="header">
    <button class="el-button exit el-button--default" @click="out">
      <span>退出登录</span>
    </button>
    <h3>admin</h3>
  </div>
</template>
<script>
import API from "../comment/js/API";
export default {
  methods: {
    out() {
      this.$axios({
        url: API.exit
      }).then(res => {
        this.$store.state.admin = "";
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';

.header {
  height: 80px;
  background: $second;
}

button {
  float: right;
  margin-top: 20px;
  margin-right: 50px;
}

h3 {
  float: right;
  font-size: 30px;
  line-height: 80px;
  color: $color4;
  margin-right: 50px;
}
</style>