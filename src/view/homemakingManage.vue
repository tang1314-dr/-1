<template>
  <div>
    <button class="el-button" style="margin-left:20px" @click="dialogFormVisible= true">
      <span class="btn-dafault">添加</span>
    </button>
    <div class="text-center">
      <el-select v-model="select" placeholder="请选择" style="width:80%" @change="change">
        <el-option label="全部" value></el-option>
        <el-option v-for="item in homeType" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <div class="input">
        <el-table :data="d" border style="width: 100%" max-height="400">
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="tel" label="电话"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="edu" label="学历"></el-table-column>
          <el-table-column label="服务类型">
            <template slot-scope="scope">{{scope.row.type|jsonparse}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="alter(scope.row.id)">查看</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog title="添加家政人员" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="资格认证">
            <el-checkbox-group v-model="form.qualification">
              <el-checkbox label="身份证" name="身份证"></el-checkbox>
              <el-checkbox label="学生证" name="学生证"></el-checkbox>
              <el-checkbox label="健康证" name="健康证"></el-checkbox>
              <el-checkbox label="上岗证" name="上岗证"></el-checkbox>
              <el-checkbox label="母婴护理证" name="母婴护理证"></el-checkbox>
              <el-checkbox label="催乳师证" name="催乳师证"></el-checkbox>
              <el-checkbox label="产后恢复证" name="产后恢复证"></el-checkbox>
              <el-checkbox label="助理家政管理师" name="助理家政管理师"></el-checkbox>
              <el-checkbox label="家政管理师" name="家政管理师"></el-checkbox>
              <el-checkbox label="高级家政管理师" name="高级家政管理师"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="服务项目">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="保姆" name="保姆"></el-checkbox>
              <el-checkbox label="月嫂" name="月嫂"></el-checkbox>
              <el-checkbox label="钟点工" name="钟点工"></el-checkbox>
              <el-checkbox label="保洁" name="保洁"></el-checkbox>
              <el-checkbox label="家电清洗" name="家电清洗"></el-checkbox>
              <el-checkbox label="家具保养" name="家具保养"></el-checkbox>
              <el-checkbox label="新居开荒" name="新居开荒"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="学历">
            <el-select v-model="form.edu" placeholder="请选择学历">
              <el-option label="小学" value="小学"></el-option>
              <el-option label="初中" value="初中"></el-option>
              <el-option label="高中" value="高中"></el-option>
              <el-option label="本科" value="本科"></el-option>
              <el-option label="研究生" value="研究生"></el-option>
              <el-option label="博士" value="博士"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作年限">
            <el-input v-model="form.year"></el-input>
          </el-form-item>
          <el-form-item label="级别">
            <el-input v-model="form.vNum"></el-input>
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item label="经验">
            <el-input v-model="form.experience"></el-input>
          </el-form-item>
          <el-form-item label="点赞数量">
            <el-input v-model="form.likeNum"></el-input>
          </el-form-item>
          <el-form-item label="关注人数">
            <el-input v-model="form.readNum"></el-input>
          </el-form-item>
          <el-form-item label="距离">
            <el-input v-model="form.len"></el-input>
          </el-form-item>
          <el-form-item label="自我评价">
            <el-input v-model="form.info"></el-input>
          </el-form-item>
          <el-form-item label="免冠照片" :label-width="formLabelWidth">
            <v-uploadImg @getUrl="getUrl"></v-uploadImg>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add(form.id)">确 定</el-button>
        </div>
      </el-dialog>
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
      select: "全部",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        img: "",
        name: "",
        age: "",
        edu: "",
        year: "",
        vNum: "",
        price: "",
        city: "",
        experience: "",
        readNum: "",
        likeNum: "",
        len: "",
        tel: "",
        info: "",
        qualification: [],
        type: [],
        id: ""
      },
      homeType: []
    };
  },
  methods: {
    change(homeType) {
      this.init(homeType);
    },
    alter(id) {
      this.dialogFormVisible = true;
      this.$axios({
        url: API.findHomeWorker,
        params: {
          id
        }
      }).then(rst => {
        console.log(rst);
        this.form = rst.data.data[0];
        this.form.qualification = this.form.qualification.split(",");
        this.form.type = this.form.type.split(",");
      });
    },
    add(id) {
      // if (/^\[/.text(this.form.qualification)) {
      //   this.form.qualification = JSON.parse(this.form.qualification)
      // }
      if (id) {
        this.$axios({
          url: API.updateHomeWorker,
          params: this.form
        }).then(res => {
          console.log(res);
        });
      } else {
        this.$axios({
          url: API.addHomeWorker,
          params: this.form
        }).then(res => {
          console.log(res);
        });
      }
      this.dialogFormVisible = false;
      this.init();
    },
    homeTypeInit() {
      this.$axios({
        url: API.getHomeType
      }).then(rst => {
        this.homeType = rst.data.type;
      });
    },
    init(homeType) {
      this.$axios({
        url: API.findHomeWorker,
        params: {
          type: homeType
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
            url: API.delHomeWorker,
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
   getUrl(a){
     this.form.img=a
   }
  },
  mounted() {
    this.homeTypeInit();
    this.init();
  }
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