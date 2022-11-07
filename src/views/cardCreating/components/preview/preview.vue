<template>
<div>
  <div id="content">
      <div>
        <img id="img" :src=this.image>
      </div>
      <el-form>
        <el-form-item>姓名:{{this.information.name}}</el-form-item>
        <el-form-item>部门:芯彩智能</el-form-item>
        <el-form-item>工号:{{this.information.id}}</el-form-item>
      </el-form>
  </div>
  <div id="btn">
    <el-button @click="goPre()">上一步</el-button>
    <el-button @click="goNext()">打印</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "preview",
  data(){
    return{
      image:null,
      information:null,
    }
  },
  mounted() {

  },
  created() {
    this.image=this.$store.state.image
    this.information=this.$store.state.information
    // console.log(this.image)
    // console.log(this.information)
    // document.getElementById('img').setAttribute('src',)
  },
  methods:{
    goPre(){

      this.$parent.goPre()
    },
    goNext(){

      this.$parent.goNext()
    }
  }
}
</script>

<style scoped>
#content{
  width: 180px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  margin-left: 430px;
}
#img{
  width: 100px;
  height: 140px;
  margin-top: 20px;
  margin-left: 0px;
}
#btn{
  align-items: center;
  margin-top: 25px;
}
.el-form-item{
  height: 10px;
}
</style>
