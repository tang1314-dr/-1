<template>
  <div class="text-center" >
    <el-select v-model="select" placeholder="请选择" style="width:80%" @change="change">
      <el-option label="全部" value="" >    
      </el-option>
      <el-option v-for="item in repair" :key="item.id" :label="item.name" :value="item.id" >     
      </el-option>
    </el-select>
    <div class="input">
      <el-table :data="d" border style="width: 100%" max-height="400">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="content" label="评论内容"></el-table-column>
        <el-table-column label="时间">
           <template slot-scope="scope">
              <span>{{scope.row.time|getTime}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import API from "../comment/js/API";
import vDel from "../view/del";
export default {
  data() {
    return {
      d: [],
      select:'全部',
      dialogFormVisible: false,
      formLabelWidth: "120px",
      data: {
        name: "",
        repairId: "",
        content: "",
        time: ""
      },
      repair:{

      }
      // input: "",
      // select: ""
    };
  },
  methods: {
    change(repairId){
      this.init(repairId)
      
    },
    repairInit(){
      this.$axios({
        url: API.findRepair,
      }).then(rst => {
        this.repair = rst.data.data;
      });
    },
    init(repairId) {
      this.$axios({
        url: API.findRepairComment,
        params:{
          repairId
        }
      }).then(rst => {
        this.d = rst.data.data;
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
            url: API.delRepairComment,
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
        this.init()
    },
  },
  mounted() {
    this.repairInit()
    this.init();
  },
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';

.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>