<template>
  <div>
    <button class="el-button" style="margin-left:20px" @click="isAdd.isAdd=true">
      <span class="btn-dafault">添加</span>
    </button>
    <div class="input">
      <el-table :data="d" border style="width: 100%" max-height="400">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="des" label="属性"></el-table-column>
        <el-table-column  label="时间">
          <template slot-scope="scope">{{scope.row.time|getTime}}</template>
        </el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="updata(scope.row.id)">查看</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <v-add v-if="isAdd.isAdd" :isAdd="isAdd"></v-add>
    <v-find v-if="isFind.isFind" :isFind="isFind" :id="id"></v-find>
    <v-del v-if="isTure.isTure" :id="id" :isTure="isTure"></v-del>
  </div>
</template>

<script>
import API from "../comment/js/API";
import vAdd from "../view/add";
import vDel from "../view/del";
import vFind from "../view/Find";
export default {
  data() {
    return {
      d: [],
      isTure: { isTure: false },
      isAdd: { isAdd: false },
      isFind: { isFind: false },
      dialogFormVisible: false,
      id: ""
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findManage,
        method: "post"
      }).then(rst => {
        this.d = rst.data.data;
      });
    },
    find(b) {
      this.$axios({
        url: API.findManage,
        method: "post",
        data: {
          id: b.id
        }
      }).then(rst => {
        console.log(rst);
      });
    },
    del(id) {
      this.isTure.isTure = true;
      this.id = id;
    },
    updata(id) {
      this.isFind.isFind = true;
      this.id = id;
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    d() {
      this.init();
    }
  },
  components: {
    vAdd,
    vDel,
    vFind
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';

.add {
  margin-left: 20px;
}
</style>
