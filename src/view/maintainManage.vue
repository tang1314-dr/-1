<template>
  <div>
    <button class="el-button" style="margin-left:20px" @click="click">
      <span class="btn-dafault">添加</span>
    </button>
    <div class="input">
      <el-table :data="d" border style="width: 100%" max-height="400">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="维修名称"></el-table-column>
        <el-table-column prop="tel" label="电话"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="alter(scope.row.id)">查看</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加维修" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="data" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="data.name"></el-input>
        </el-form-item>
        <el-form-item label="评分">
          <el-input v-model="data.score" type="number"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="data.type" type="number"></el-input>
        </el-form-item>
        <el-form-item label="好评人数">
          <el-input v-model="data.likeNum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="关注数">
          <el-input v-model="data.readNum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商家地址">
          <el-input v-model="data.address"></el-input>
        </el-form-item>
        <el-form-item label="距离">
          <el-input v-model="data.len"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="data.tel"></el-input>
        </el-form-item>
        <el-form-item label="商家信息">
          <el-input v-model="data.info"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add(data.id)">确 定</el-button>
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
      dialogFormVisible:false,
      data: {
        img: "",
        name: "",
        score: "",
        count: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        des: "",
        tel: "",
        price: "",
        id: ""
      }
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findRepair
      }).then(rst => {
        this.d = rst.data.data;
        // console.log(rst);
      });
    },
    alter(id) {
      this.dialogFormVisible = true;
      this.$axios({
        url: API.findRepair,
        params: {
          id
        }
      }).then(rst => {
        console.log(rst);
        this.data = rst.data.data[0];
      });
    },
    add(id) {
      if (id) {
        this.$axios({
          url: API.updateRepair,
          params: this.data
        }).then(res => {
          console.log(res);
        });
      } else {
        this.$axios({
          url: API.addRepair,
          params: this.data
        }).then(res => {
          console.log(res);
        });
      }
      this.dialogFormVisible = false;
    },
    click() {
      this.data = {};
      this.dialogFormVisible = true;
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delRepair,
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
</style>