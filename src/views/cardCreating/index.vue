<template>
  <div id="main">
    <div id="step">
      <el-steps :active="active" align-center>
        <el-step title="信息填写" icon="el-icon-edit"></el-step>
        <el-step title="人脸拍摄" icon="el-icon-camera"></el-step>
        <el-step title="打印卡片" icon="el-icon-picture"></el-step>
        <el-step title="上传信息" icon="el-icon-upload"></el-step>
      </el-steps>
    </div>
    <div id="top" >
      <el-button id="back" @click="goBack">返回首页</el-button>
<!--      <auto-edit></auto-edit>-->
      <take-picture></take-picture>
    </div>
  </div>
</template>

<script>
import AutoEdit from "@/views/cardCreating/components/edit/auto";
import TakePicture from "@/views/cardCreating/components/picture/takePicture";
export default {
  name: "index",
  components: {TakePicture, AutoEdit},
  data(){
    return{
      active:1,
    }
  },
  methods:{
    goBack(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.div{
  margin: 0 auto;
}
#main {
  margin: 0 auto;
  height: 800px;
  width: 100%;
  background-color: #ecf5ff;
}

#top {
  width: 70%;
  margin-left: 15%;
  height: 500px;
  border: solid 1px #c6e2ff;
  border-radius: 10px;
  margin-top: 20px;
  background: url("background_blue.png") no-repeat;
  background-size: 100% 100%;
}
#step{
  padding-top: 100px;
}
#back{
  margin-top: 20px;
  margin-right: 900px;
}
</style>
