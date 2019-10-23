<template>
  <div class="input text-center">
    <el-form ref="form" :model="user" label-width="80px" label-position="left">
      <el-form-item label="账号">
        <el-input v-model="user.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="原始密码">
        <el-input v-model="user.oldpass" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="user.newpass" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="passTwo" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="alter">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import API from "../comment/js/API";
export default {
  data() {
    return {
      user: {
        name: this.$store.state.manage.name,
        oldpass: "",
        newpass: ""
      },
      passTwo: ""
    };
  },
  methods: {
    alter() {
      this.$axios({
        url: API.changePassManage,
        method: "post",
        data: this.user
      }).then(res => {
        if (res.data.isok) {
          this.$router.push("/index");
        }
        this.$message(res.data.info);
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>