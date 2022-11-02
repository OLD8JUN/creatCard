<template>
  <div>
    <div id="text" v-if="showText">
      <div>
        <span>请放入身份证进行信息获取</span>
      </div>
      <div>
        <span>或</span>
      </div>
      <div id="btn">
        <el-button plain @click="showText=false">手动输入</el-button>
      </div>
    </div>
    <div v-if="!showText" id="formTable">
      <el-form label-width="80px">
        <el-form-item>
          <span slot="label" class="formLabel" >姓名</span>
          <el-input v-model="searchFrom.name"></el-input>
        </el-form-item>
        <el-form-item>
          <span slot="label" class="formLabel">工号</span>
          <el-input v-model="searchFrom.id"></el-input>
        </el-form-item>
      </el-form>
      <div id="btnArea">
        <el-button @click="showText=true">自动填写</el-button>
        <el-button @click="goNext()">查询</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "autoEdit",
  data(){
    return{
      showText:false,
      searchFrom:{
        name:null,
        id:null
      }
    }
  },
  methods:{
    goNext() {
      console.log(this.searchFrom)
      this.$store.commit('setInformation',this.searchFrom)
      this.$parent.goNext()
    },
    goPre(){
      this.$parent.goPre()
    },
  }
}
</script>

<style scoped>
span {
  color: white;
  font-size: 50px;
  margin-top: 100px;
}

#text {
  padding-top: 100px;
}

#btn {
  margin-top: 10px;
}
#formTable{
  margin-top: 100px;
  margin-left: 250px;
}
.el-form-item{
  width: 500px;
}
.formLabel{
  font-size: 25px;
}

</style>
