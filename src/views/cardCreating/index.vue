<template>
  <div id="main">
    <div id="step">
      <el-steps :active="active" align-center>
        <el-step title="信息填写" icon="el-icon-edit"></el-step>
        <el-step title="人脸拍摄" icon="el-icon-camera"></el-step>
        <el-step title="打印卡片" icon="el-icon-picture"></el-step>
        <el-step title="写入信息" icon="el-icon-upload"></el-step>
      </el-steps>
    </div>
    <div id="top" >
      <el-button id="back" @click="goBack">返回首页</el-button>
      <auto-edit v-if="active==1"></auto-edit>
      <take-picture v-if="active==2"></take-picture>
      <preview v-if="active==3"></preview>
      <write v-if="active==4"></write>
    </div>
  </div>
</template>

<script>
import AutoEdit from "@/views/cardCreating/components/edit/auto";
import TakePicture from "@/views/cardCreating/components/picture/takePicture";
import Preview from "@/views/cardCreating/components/preview/preview";
import Write from "@/views/cardCreating/components/write/write";
export default {
  name: "index",
  components: {Write, Preview, TakePicture, AutoEdit},
  data(){
    return{
      active:1,
      showData:[null,true,false,false,false,false]
    }
  },
  methods:{
    goBack(){
      this.$router.push('/')
    },
    goNext(){
      if (this.active++ > 4) this.active = 4;
    },
    goPre(){
      if (this.active-- < 1) this.active = 1;
    },
    restart(){
      this.active=1
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
