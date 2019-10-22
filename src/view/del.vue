<template>
  <div></div>
</template>
<script>
import API from "../comment/js/API";
export default {
  props: ["id", "isTure"],
  mounted() {
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.isTure.isTure = false;
        this.$axios({
          url: API.delManage,
          method: "post",
          data: {
            id: this.id
          }
        }).then(rst => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          console.log(rst);
        });
      })
      .catch(() => {
        this.isTure.isTure = false;
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>