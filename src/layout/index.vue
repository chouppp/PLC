<template>
  <div class="container">
    <div class="top-group"></div>
    <span class="top-group-text" >自动化设备</span>
    <div class="left-button-group"></div>
      <el-button class="custom-button button-clz" native-type="button" @click="goToHome"> 手动模式 </el-button>
      <el-button class="custom-button button3-clz" native-type="button"> 自动模式 </el-button>
      <el-button class="custom-button button4-clz" native-type="button"> 设置 </el-button>
      <el-button class="custom-button button5-clz" native-type="button"> 报警 </el-button>
      <el-button class="custom-button button6-clz" native-type="button" @click="goToCeshi2"> IO设置 </el-button>
      <el-button class="custom-button button2-clz" native-type="button"> 登录 </el-button>
    
    <div class="right-button-group"> </div>
      <el-button class="custom-button button1-clz" native-type="button" @click="goToCeshi2"> 测试界面1 </el-button>
      <el-button class="custom-button button7-clz" native-type="button" @click="goToCeshi3"> 测试界面2 </el-button>
      <el-button class="custom-button button8-clz" native-type="button" @click="goTotest"> 读写测试 </el-button>
   
    <div class="router-view-container">
      <router-view></router-view>
    </div>
    

  </div>
</template>

<script lang="ts">

import { ElMessageBox, ElMessage } from 'element-plus'

export default {
  name: 'Layout',
  components: {},
  data() {
    return {
      globalOption: {},
      userInfo: {},
      radio: 0
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/home')
    },
    goToCeshi2() {
      this.$router.push('/ceshi2')
    },
    goToCeshi3() {
      this.$router.push('/ceshi3')
    },
    goTotest() {
      this.$router.push('/readwritetest')
    },
    handleRadioChange(value: string) {
      console.log('Selected:', value)
    },
    async init() {}
  },
   mounted() {
   

  },
  beforeUnmount() {}
}
</script>

<style lang="scss" scoped>
html, body {
 overflow: hidden; /* 禁止滚动条 */
  //overflow: auto;
}
.button-clz {
  top: 15%;
  left: 4%;
  position: absolute;
}
.button3-clz {
  top: 27.8%;
  left: 3.5%;
  position: absolute;
}
.button4-clz {
  top: 40.6%;
  left: 3.5%;
  position: absolute;
}
.button5-clz {
  top: 53.4%;
  left: 3.5%;
  position: absolute;
}
.button6-clz {
  top: 66.2%;
  left: 3.5%;
  position: absolute;
}
.button2-clz {
  top: 79%;
  left: 3.5%;
  position: absolute;
}
.button1-clz {
  top: 15%;
  left: 82.5%;
  position: absolute;
}
.button7-clz {
  top: 43%;
  left: 82%;
  position: absolute;
}
.button8-clz {
  top: 71%;
  left: 82%;
  position: absolute;
}
html, b
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.container {
  height: 100%; /* 使用视口高度 */
  width: 100%; /* 使用视口宽度 */
  font-size: 12px;
  background-color: rgb(207, 217, 217);
  position: absolute;
  //background: url('@/static/ym1.png'); /* 使用 @ 表示 src 目录 */
 // background-size: cover; /* 让图片覆盖整个容器 */
  //background-position: center; /* 居中显示背景图片 */
  //background-repeat: no-repeat; /* 防止背景图片重复 */
}
.custom-button {
  background-color: lightblue;
  border-color: lightblue;
  color: white;
  width: 13.5%; /* Fixed width */
  height:10%; /* Fixed height */
  border-radius: 5px;
  font-size: 30px;
}
.custom-button:active {
  background-color: yellow;
  border-color: yellow;
}
.router-view-container {
  position: absolute;
  top: 13%;
  left: 20%;
  width: 60%;
  height: 73%;
  background-color: white; /* Optional: to visually distinguish the router-view area */
}
.radio-group-container {
  position: absolute;
  top: 86%;
  left: 20%;
  width: 60%;
  height: 8%;
  background-color: lightblue; /* Optional: to visually distinguish the radio group area */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left-button-group {
  position: absolute;
  top: 12%;
  margin-left: 3%;
  width: 13.5%;
  height: 75%;
  border: 10px solid rgb(53, 188, 222);
  border-radius: 10px;
  padding: 10px;
}
.right-button-group {
  position: absolute;
  top: 12%;
  left: 81.5%;
  width: 13.5%;
  height: 75%;
  border: 10px solid rgb(53, 188, 222);
  border-radius: 10px;
  padding: 10px;
}
.top-group {
  position: absolute;
  top: 0%;
  left: 27%;
  width: 46%;
  height: 5%;
  border: 4px solid rgb(216, 212, 212);
  border-radius: 0 0 100px 100px;
  padding: 10px;
}
.top-group-text {
  position: absolute;
  top: 1%;
  left: 27%;
  width: 46%;
  height: 5%;
  font-size: 30px;
  color: yellow;
}
:deep(.el-radio) {
  font-size: 30px;
}

</style>