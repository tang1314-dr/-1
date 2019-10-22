<template>
  <div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
    <el-dialog title="添加修改管理员" :visible.sync="isFind.isFind">
      <el-form :model="user">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="user.name" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="user.pass" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="user.des" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="time"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          >
            <template slot-scope="scope">
              <span>{{scope.row.data|getTime}}</span>
            </template>
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isFind.isFind = false">取 消</el-button>
        <el-button type="primary" @click="alter">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../comment/js/API";
export default {
  props: ["isFind", "id"],
  data() {
    return {
      formLabelWidth: "120px",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      config: "",
      time: "",
      user: {
        name: "",
        pass: "",
        time: "",
        des: ""
      },
      _id: ""
    };
  },
  methods: {
    alter() {
        // console.log(this.id);
        
      this.isFind.isFind = false;
      this.$axios({
        url: API.updateManage,
        method: "post",
        data: this.user
      }).then(rst => {
        console.log(rst);
      });
    }
  },
  created() {
    this.$axios({
      url: API.findManage,
      method: "post",
      data: {
        id: this.id
      }
    }).then(rst => {
      this.user = rst.data.data[0];
      this.time = new Date(Number(rst.data.data[0].time));     
      console.log(rst.data);
      
    });
  }
};
</script>
<style lang='stylus' scoped>
@import '../comment/stylus/index.styl';
</style>