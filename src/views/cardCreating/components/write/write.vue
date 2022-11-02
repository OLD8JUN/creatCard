<template>
<div>
  <el-button @click="goPre()">上一步</el-button>
  <el-button @click="restart()">结束</el-button>
</div>
</template>

<script>
export default {
  name: "write",
  methods:{
    goPre(){
      this.$parent.goPre()
    },
    goNext(){
      this.$parent.goNext()
    },
    restart(){
      this.$parent.restart()
    }
  }
}
</script>

<style scoped>

</style>
