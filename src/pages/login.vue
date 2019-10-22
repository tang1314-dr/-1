<template>
  <div>
    <div class="mask">
      <div class="box text-center">
        <h3 class="text-center text-primary">登录</h3>
        <div class="input">
          <el-select v-model="user.type" placeholder="请选择角色" style="width:100%">
            <el-option
              v-for="item in options"
              :key="item.type"
              :label="item.label"
              :value="item.type"
            ></el-option>
          </el-select>
        </div>
        <div class="input">
          <el-input v-model="user.name" placeholder="请输入账号"></el-input>
        </div>
        <div class="input">
          <el-input v-model="user.pass" placeholder="请输入密码"></el-input>
        </div>
        <el-button type="success" @click="login" :plain="true">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../comment/js/API";
export default {
  data() {
    return {
      options: [
        {
          type: "0",
          label: "超管"
        },
        {
          type: "1",
          label: "普管"
        },
        {
          type: "2",
          label: "用户"
        }
      ],
      user: {
        name: "",
        pass: "",
        type: ""
      }
    };
  },
  methods: {
    login() {
      this.$axios({
        url: API.login,
        method: "post",
        data: this.user
      }).then(rst => {
        if (rst.data.isok) {
          this.$store.dispatch('changeAdmin',rst.data.type)
          this.$router.push("/index");
          this.$message(rst.data.info);          
        } else {
          this.$message(rst.data.info);
        }
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';

.mask {
  width: 100vw;
  height: 100vh;
  background: $primary;

  .box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 300px;
  }

  h3 {
    font-size: 40px;
    line-height: 60px;
  }
}
</style>
