<template>
  <div>
    <button class="el-button" style="margin-left:20px" @click="dialogFormVisible=true">
      <span class="btn-dafault">添加</span>
    </button>
    <div class="input">
      <el-table :data="d" border style="width: 100%" max-height="400">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="图片">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt style="width:200px;height:100px" />
          </template>
        </el-table-column>
        <el-table-column prop="num" label="报名人数"></el-table-column>
        <el-table-column label="授课机构">
          <template slot-scope="scope">
            <img :src="scope.row.teacherImg" alt style="width:200px;height:100px" />
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加家教排行" :visible.sync="dialogFormVisible">
      <el-form :model="img">
        <el-form-item label="图片" :label-width="formLabelWidth" >
         <v-uploadImg @getUrl="getUrl1"></v-uploadImg>
        </el-form-item>
        <el-form-item label="机构" :label-width="formLabelWidth" >
          <v-uploadImg @getUrl="getUrl2"></v-uploadImg>
        </el-form-item>
        <el-form-item label="报名人数" :label-width="formLabelWidth">
          <el-input v-model="img.num" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../comment/js/API";
import vAdd from "../view/add";
import vDel from "../view/del";
export default {
  data() {
    return {
      d: [],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      img: {
        img: "",
        num: "",
        teacherImg: ""
      }
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.teacherTop
      }).then(rst => {
        this.d = rst.data.data;
        // console.log(rst);
      });
    },
    add() {
      this.dialogFormVisible = false;
      this.$axios({
        url: API.addTeacherTop,
        params: this.img
      }).then(res => {
        console.log(res);
      });
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delTeacherTop,
            params: {
              id
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
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getUrl1(a){
      this.img.img=a
    },
    getUrl2(a){   
      this.img.teacherImg=a
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    d() {
      this.init();
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';

.avatar-uploader .el-upload {
  border: 1px dashed red;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>