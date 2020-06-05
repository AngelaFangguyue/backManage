<template>
  <div>
    EditArt
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent="onSubmit1">
      <el-form-item label="文章标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="文章序言">
        <el-input v-model="form.name1"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
          name:'',
          name1:''
      }
    };
  },
  created() {
    let id1 = this.$route.params.id; //获取到对应id，这时就要去后台获取数据
    console.log(id1);
    this.$http
      .get(``)
      .then(response => {
        //这里的api就是后台接口
        console.log(response.data);
        this.res = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>