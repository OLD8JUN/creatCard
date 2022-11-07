<template>
<div>
  <div id="top">
    <span>制卡倒计时</span>
    <CricleTimer
        ref="timer"
        :start-time="count"
        :step="-1"
        :thresholds="[
      { color: '#FF9370', threshold: 0.5 },
      { color: '#FF1100', threshold: 0.25 }
    ]"
    ></CricleTimer>
  </div>
 <div id="bot">
   <el-button @click="goPre()">上一步</el-button>
   <el-button @click="restart()">结束</el-button>
 </div>
</div>
</template>

<script>

import CricleTimer from "@/components/CircleTimer";
export default {
  name: "write",
  components: {CricleTimer},
  data(){
    return{
      count:100,
    }
  },
  mounted() {

  },
  methods:{
    goPre(){
      this.$parent.goPre()
      this.$refs.timer.stop()
    },
    goNext(){
      this.$parent.goNext()
    },
    restart(){
      this.$parent.restart()
    },
  },
}
</script>

<style scoped>
#top{
  margin-top: 10px;
}
#bot{
  margin-top: 50px;
}
span{
  color: white;
  font-size: 25px;
}
</style>
