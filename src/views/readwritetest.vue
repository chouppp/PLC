<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>设备状态</span>
      </div>
      <div class="data-container">
        <div class="data-column">
          <p>布尔值1: {{ data?.bool1 === 1 ? true : false }}</p>
          <p>布尔值2: {{ data?.bool2 === 1 ? true : false }}</p>
          <p>布尔值3: {{ data?.bool3 === 1 ? true : false }}</p>
          <p>布尔值4: {{ data?.bool4 === 1 ? true : false }}</p>
          <p>布尔值5: {{ data?.bool5 === 1 ? true : false }}</p>
          <p>布尔值6: {{ data?.bool6 === 1 ? true : false }}</p>
          <p>布尔值7: {{ data?.bool7 === 1 ? true : false }}</p>
          <p>布尔值8: {{ data?.bool8 === 1 ? true : false }}</p>
          <p>布尔值9: {{ data?.bool9 === 1 ? true : false }}</p>
          <p>布尔值10: {{ data?.bool10 === 1 ? true : false }}</p>
          <p>布尔值11: {{ data?.bool11 === 1 ? true : false }}</p>
          <p>布尔值12: {{ data?.bool12 === 1 ? true : false }}</p>
          <p>布尔值13: {{ data?.bool13 === 1 ? true : false }}</p>
          <p>布尔值14: {{ data?.bool14 === 1 ? true : false }}</p>
          <p>布尔值15: {{ data?.bool15 === 1 ? true : false }}</p>
          <p>布尔值16: {{ data?.bool16 === 1 ? true : false }}</p>
          <p>整数值: {{ data?.int1 || 0 }}</p>
          <p>实数值: {{ data?.float1 || 0.0 }}</p>
        </div>
      </div>
      <div class="card-footer">
        <el-button type="primary" @click="connectDevice">连接设备</el-button>
        <el-button type="danger" @click="disconnectDevice">断开连接</el-button>
        <el-button type="primary" @click="fetchData">刷新</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'readwritetest',
  data() {
    return {
      data: null as any,
    }
  },
  methods: {
    fetchData() {
      axios.get('api/user/read_test') // 替换为实际的后端接口
        .then(response => {
          this.data = response.data
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    connectDevice() {
      // 连接设备的逻辑
      axios.get('api/user/mutiplayconnect/device1/192.168.107.10') // 替换为实际的后端接口
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error)
        })
      console.log('连接设备');
    },
    disconnectDevice() {
      // 断开连接的逻辑
      axios.get('api/user/mutiplaydisconnect/device1') // 替换为实际的后端接口
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error)
        })
      console.log('断开连接');
    }
  },
  mounted() {
    this.fetchData()
  }
})
</script>

<style scoped>
.data-container {
  display: flex;
  flex-wrap: wrap;
  color: black;
}
.box-card {
  width: 60%;
  height: 70%;
  margin-left: 20%;
  margin-top: 5%;
}
.data-column {
  flex: 1;
  min-width: 200px; /* 根据需要调整列宽 */
  margin-right: 20px;
}

p {
  margin: 5px 0;
}

.card-footer {
  text-align: center;
  margin-top: 20px;
}
</style>