<template>
    <div>
      <h2>设备状态</h2>
      <div  class="data-container">
        
        <div class="data-column">
          <p>喂料机2#喂料超时: {{ data?.feeding_machine2_timeout || 0 }}</p>
          <p>喂料机3#喂料超时: {{ data?.feeding_machine3_timeout || 0 }}</p>
          <p>喂料机4#喂料超时: {{ data?.feeding_machine4_timeout || 0 }}</p>
          <p>喂料机5#喂料超时: {{ data?.feeding_machine5_timeout || 0 }}</p>
          <p>喂料机6#喂料超时: {{ data?.feeding_machine6_timeout || 0 }}</p>
          <p>上料机7#吸料超时: {{ data?.loading_machine7_timeout || 0 }}</p>
          <p>配料系统运行中: {{ data?.ingredient_system_running || 0 }}</p>
          <p>远程控制状态: {{ data?.remote_control_status || 0 }}</p>
          <p>配料系统缓停中: {{ data?.ingredient_system_slowly_stopping || 0 }}</p>
          <p>配料上料机1#满仓: {{ data?.ingredient_feeder1_full || 0 }}</p>
          <p>配料上料机2#满仓: {{ data?.ingredient_feeder2_full || 0 }}</p>
          <p>配料上料机3#满仓: {{ data?.ingredient_feeder3_full || 0 }}</p>
          <p>配料上料机4#满仓: {{ data?.ingredient_feeder4_full || 0 }}</p>
          <p>配料上料机5#满仓: {{ data?.ingredient_feeder5_full || 0 }}</p>
          <p>配料上料机6#满仓: {{ data?.ingredient_feeder6_full || 0 }}</p>
          <p>急停中: {{ data?.emergency_stop || 0 }}</p>
          <p>小料配料批次完成一次: {{ data?.ingredients_complete_once || 0 }}</p>
          <p>小料配料批次完成: {{ data?.ingredients_complete || 0 }}</p>
          <p>等待高混机放料信号: {{ data?.waiting_discharge_signal || 0 }}</p>
          <p>配料上料机1#状态: {{ data?.ingredient_feeder1_status || 0 }}</p>
          <p>配料上料机2#状态: {{ data?.ingredient_feeder2_status || 0 }}</p>
        </div>
        <div class="data-column">
          <p>配料上料机3#状态: {{ data?.ingredient_feeder3_status || 0 }}</p>
          <p>配料上料机4#状态: {{ data?.ingredient_feeder4_status || 0 }}</p>
          <p>配料上料机5#状态: {{ data?.ingredient_feeder5_status || 0 }}</p>
          <p>配料上料机6#状态: {{ data?.ingredient_feeder6_status || 0 }}</p>
          <p>喂料1#喂料状态: {{ data?.feeding1_Status || 0 }}</p>
          <p>喂料2#喂料状态: {{ data?.feeding2_Status || 0 }}</p>
          <p>喂料3#喂料状态: {{ data?.feeding3_Status || 0 }}</p>
          <p>喂料4#喂料状态: {{ data?.feeding4_Status || 0 }}</p>
          <p>喂料5#喂料状态: {{ data?.feeding5_Status || 0 }}</p>
          <p>喂料6#喂料状态: {{ data?.feeding6_Status || 0 }}</p>
          <p>上料机7#吸料状态: {{ data?.xiliao_Status || 0 }}</p>
          <p>上料机7#放料状态: {{ data?.fangliao_status || 0 }}</p>
          <p>当前批次: {{ data?.current_batch || 0 }}</p>
          <p>喂料机变频频率显示: {{ data?.feeding_machine_frequency_conversion_display || 0 }}</p>
          <p>配料料斗重量显示: {{ data?.weight_display_of_ingredient_hopper || 0 }}</p>
          <p>喂料机1#净重(完成量）: {{ data?.net_weight_of_feeder1 || 0 }}</p>
          <p>喂料机2#净重(完成量）: {{ data?.net_weight_of_feeder2 || 0 }}</p>
          <p>喂料机3#净重(完成量）: {{ data?.net_weight_of_feeder3 || 0 }}</p>
          <p>喂料机4#净重(完成量）: {{ data?.net_weight_of_feeder4 || 0 }}</p>
          <p>喂料机5#净重(完成量）: {{ data?.net_weight_of_feeder5 || 0 }}</p>
          <p>喂料机6#净重(完成量）: {{ data?.net_weight_of_feeder6 || 0 }}</p>
        </div>
      </div>
      <button  style="background-color: aqua;" @click="fetchData">刷新</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  
  export default defineComponent({
    name: 'Ceshi3',
    data() {
      return {
        data: null as any,
        
  
      }
    },
    methods: {
      fetchData() {
        axios.get('api/user/read_device1register1_44') // 替换为实际的后端接口
          .then(response => {
            this.data = response.data
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
      },
      logout() {
        localStorage.removeItem('loggedIn')
        this.$router.push('/login')
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
  
  .data-column {
    flex: 1;
    min-width: 200px; /* 根据需要调整列宽 */
    margin-right: 20px;
  }
  
  p {
    margin: 5px 0;
  }
  </style>