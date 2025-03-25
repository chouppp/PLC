<template>
 <div>
     <div class="title1">上料道一</div>
     <div class="card1">
      <div class="row header">
        <span style="margin-left: -30px;">序号</span>
        <span  style="margin-left: -42px;">位置设定(M)     </span>
        <span style="margin-left: 70px;">速度设定(M/S)</span>
        <span style="margin-left: 50px;">操作</span>
      </div>
      <div class="row">
        <span>X轴</span>
        <el-input v-model="xPosition" ></el-input>
        <el-input v-model="xSpeed" ></el-input>
        <el-button type="primary" @click="confirmX">确认</el-button>
      </div>
      <div class="row">
        <span>Y轴</span>
        <el-input v-model="yPosition"></el-input>
        <el-input v-model="ySpeed" ></el-input>
        <el-button type="primary" @click="confirmY">确认</el-button>
      </div>
      <div class="row">
        <span>Z轴</span>
        <el-input v-model="zPosition" ></el-input>
        <el-input v-model="zSpeed" ></el-input>
        <el-button type="primary" @click="confirmZ">确认</el-button>
      </div>
      <div class="row">
        <span>C轴</span>
        <el-input v-model="wPosition"></el-input>
        <el-input v-model="wSpeed" ></el-input>
        <el-button type="primary" @click="confirmW">确认</el-button>
      </div>
     </div>
     <div class="title2">上料道二</div>
    <div class="card2">
      <div class="row header">
        <span style="margin-left: -30px;">序号</span>
        <span style="margin-left: -42px;">位置设定(M)</span>
        <span style="margin-left: 70px;">速度设定(M/S)</span>
        <span style="margin-left: 50px;">操作</span>
      </div>
      <div class="row">
        <span>X轴</span>
        <el-input v-model="xPosition"></el-input>
        <el-input v-model="xSpeed"></el-input>
        <el-button type="primary" @click="confirmX">确认</el-button>
      </div>
      <div class="row">
        <span>Y轴</span>
        <el-input v-model="yPosition"></el-input>
        <el-input v-model="ySpeed"></el-input>
        <el-button type="primary" @click="confirmY">确认</el-button>
      </div>
      <div class="row">
        <span>Z轴</span>
        <el-input v-model="zPosition"></el-input>
        <el-input v-model="zSpeed"></el-input>
        <el-button type="primary" @click="confirmZ">确认</el-button>
      </div>
      <div class="row">
        <span>C轴</span>
        <el-input v-model="wPosition"></el-input>
        <el-input v-model="wSpeed"></el-input>
        <el-button type="primary" @click="confirmW">确认</el-button>
      </div>
    </div>
    <div class="title3">上料道三</div>
    <div class="card3">
      <div class="row header">
        <span style="margin-left: -30px;">序号</span>
        <span style="margin-left: -42px;">位置设定(M)</span>
        <span style="margin-left: 70px;">速度设定(M/S)</span>
        <span style="margin-left: 50px;">操作</span>
      </div>
      <div class="row">
        <span>X轴</span>
        <el-input v-model="xPosition"></el-input>
        <el-input v-model="xSpeed"></el-input>
        <el-button type="primary" @click="confirmX">确认</el-button>
      </div>
      <div class="row">
        <span>Y轴</span>
        <el-input v-model="yPosition"></el-input>
        <el-input v-model="ySpeed"></el-input>
        <el-button type="primary" @click="confirmY">确认</el-button>
      </div>
      <div class="row">
        <span>Z轴</span>
        <el-input v-model="zPosition"></el-input>
        <el-input v-model="zSpeed"></el-input>
        <el-button type="primary" @click="confirmZ">确认</el-button>
      </div>
      <div class="row">
        <span>C轴</span>
        <el-input v-model="wPosition"></el-input>
        <el-input v-model="wSpeed"></el-input>
        <el-button type="primary" @click="confirmW">确认</el-button>
      </div>
    </div>
    <div class="title4">上料道四</div>
    <div class="card4">
      <div class="row header">
        <span style="margin-left: -30px;">序号</span>
        <span style="margin-left: -42px;">位置设定(M)</span>
        <span style="margin-left: 70px;">速度设定(M/S)</span>
        <span style="margin-left: 50px;">操作</span>
      </div>
      <div class="row">
        <span>X轴</span>
        <el-input v-model="xPosition"></el-input>
        <el-input v-model="xSpeed"></el-input>
        <el-button type="primary" @click="confirmX">确认</el-button>
      </div>
      <div class="row">
        <span>Y轴</span>
        <el-input v-model="yPosition"></el-input>
        <el-input v-model="ySpeed"></el-input>
        <el-button type="primary" @click="confirmY">确认</el-button>
      </div>
      <div class="row">
        <span>Z轴</span>
        <el-input v-model="zPosition"></el-input>
        <el-input v-model="zSpeed"></el-input>
        <el-button type="primary" @click="confirmZ">确认</el-button>
      </div>
      <div class="row">
        <span>C轴</span>
        <el-input v-model="wPosition"></el-input>
        <el-input v-model="wSpeed"></el-input>
        <el-button type="primary" @click="confirmW">确认</el-button>
      </div>
    </div>
 </div>
</template>

<script lang="ts">


export default {
  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
      xPosition: '',
      xSpeed: '',
      yPosition: '',
      ySpeed: '',
      zPosition: '',
      zSpeed: '',
      wPosition: '',
      wSpeed: ''
    }
  },
  methods: {
    confirmX() {
      console.log('X轴位置:', this.xPosition, '速度:', this.xSpeed);
    },
    confirmY() {
      console.log('Y轴位置:', this.yPosition, '速度:', this.ySpeed);
    },
    confirmZ() {
      console.log('Z轴位置:', this.zPosition, '速度:', this.zSpeed);
    },
    confirmW() {
      console.log('W轴位置:', this.wPosition, '速度:', this.wSpeed);
    }
  }
};
</script>

<style scoped>
.title1 {
  font-size: 30px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  color: black;
  border: solid black;
  padding-top: 5px;
  margin-left: 10px;
}
.title2{
  font-size: 30px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  color: black;
  border: solid black;
  position: absolute;
  top: 350px;
  left: 10px;
}
.title3{
  font-size: 30px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  color: black;
  border: solid black;
  position: absolute;
  top: 0px;
  right: 280px;
}
.title4{
  font-size: 30px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  color: black;
  border: solid black;
  position: absolute;
  top: 350px;
  right: 280px;
}
.card1, .card2, .card3, .card4 {
  font-size: 20px;
  width: 440px;
  height: auto;
  margin-top: 20px;
  color: black;
  border: solid black;
  padding: 10px;
  margin-left: 10px;
}
.card2 {
  position: absolute;
  top: 80px;
  right: 20px;
}
.card3 {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.card4 {
  position: absolute;
  bottom: 0px;
  right: 20px;
}
.row {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 12px;
}
.header {
  font-weight: bold;
  margin-bottom: 10px;
}
.row span {
  width: 100px;
  margin-top: 0px;
}
.el-input {
  margin-right: 10px;
}
.el-button {
  margin-left: 10px;
}
</style>