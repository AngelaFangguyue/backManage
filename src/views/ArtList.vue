<template>
  <el-table :data="tableData">
    <el-table-column prop="title" label="标题" width="140"></el-table-column>
    <el-table-column prop="content" label="内容" width="120"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        {{scope.$index}}\{{scope.row}}\{{scope.column}}
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      artList: {},
      api: "/art/list",
      tableData: [
        {
          title: "11",
          content: "111111"
        },
        {
          title: "22",
          content: "222222"
        },
        {
          title: "33",
          content: "333333"
        }
      ]
    };
  },
  methods: {
    fetch() {
      //获取要展示的文章数据
      this.$http
        .get("/api/article") //这里面的get put post delete都是后端服务器文件定义好的
        .then(response => {
          console.log(response.data);
          this.artList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleEdit(id) {
      //编辑的话，进入一个新的页面
      this.$router.push(`/${id}/editArt`);
    },
    handleDelete(id) {
      //向后台发送删除数据的操作
      //删除之后还需要重新获取一遍数据，这时候页面会再次刷新
      //昨天遇到的问题是：修改之后，触发一个事件，然后
      this.$http
        .delete(`/article/${id}`) //这里面的get put post delete都是后端服务器文件定义好的
        .then(response => {
          //这里的api就是后台接口
          console.log(response.data);
          this.artList = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.$http
      .get("/api/article")
      .then(response => {
        //这里的api就是后台接口
        console.log(response.data);
        this.artList = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>