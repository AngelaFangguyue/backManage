<template>
  <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent="onSubmit">
    <el-form-item label="文章标题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="文章序言">
      <el-input v-model="form.name1"></el-input>
    </el-form-item>
    <el-form-item label="文章类型">
      <el-select v-model="form.tss" placeholder="请选择类型">
        <el-option label="区一" value="shanghai"></el-option>
        <el-option label="区二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input v-model="form.content" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        name1: "",
        tss: "",
        content: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
       this.$http
        .post('/article')
        .then(response => {
          //这里的api就是后台接口
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>