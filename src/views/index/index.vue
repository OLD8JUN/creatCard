<template>
  <div id="main">
    <div id="btn">
      <el-button type="primary" id="creat" @click="creat">制卡</el-button>
      <el-button id="replacement" @click="replacement">补卡</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainIndex",
  methods:{
    creat(){
      this.$router.push('/cardCreatind')
    },
    replacement(){
      this.$router.push('/cardReplacement')
    }
  }
}
</script>

<style scoped>
#main {
  margin: 0 auto;
  height: 568px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#btn {
  width: 100%;
  align-items: center;
  justify-content: center;
}

.el-button{
  margin-right: 200px;
  margin-left: 200px;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  font-size: 50px;
}
</style>
