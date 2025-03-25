<template>
    <div>
      <h2>设备状态</h2>
      <div class="data-container">
        <div class="data-column">
          <p>高混使能: {{ data?.high_mixing_enabled || 0 }}</p>
          <p>冷混使能: {{ data?.cold_mixing_enabled || 0 }}</p>
          <p>冷混放料允许: {{ data?.cold_mixing_discharge_allowed || 0 }}</p>
          <p>冷混混料完成: {{ data?.cold_mixing_mixing_complete || 0 }}</p>
          <p>系统运行中: {{ data?.system_running || 0 }}</p>
          <p>系统缓停中: {{ data?.system_slow_stop || 0 }}</p>
          <p>批次完成一次: {{ data?.batch_completed_once || 0 }}</p>
          <p>批次完成: {{ data?.batch_completed || 0 }}</p>
          <p>急停中: {{ data?.emergency_stop || 0 }}</p>
          <p>白油补料仓料位低: {{ data?.white_oil_supplement_bin_low || 0 }}</p>
          <p>白油补料仓料位高: {{ data?.white_oil_supplement_bin_high || 0 }}</p>
          <p>冷混暂存仓料位1低: {{ data?.cold_mixing_temp_bin_level1_low || 0 }}</p>
          <p>冷混暂存仓料位2低: {{ data?.cold_mixing_temp_bin_level2_low || 0 }}</p>
          <p>1#高混机放料开到位故障: {{ data?.high_mixer_discharge_open_fault || 0 }}</p>
          <p>1#高混机放料关到位故障: {{ data?.high_mixer_discharge_close_fault || 0 }}</p>
          <p>1#冷混机放料开到位故障: {{ data?.cold_mixer_discharge_open_fault || 0 }}</p>
          <p>1#冷混机放料关到位故障: {{ data?.cold_mixer_discharge_close_fault || 0 }}</p>
          <p>原料仓料位高高: {{ data?.raw_bin_level_high_high || 0 }}</p>
          <p>原料仓料位高: {{ data?.raw_bin_level_high || 0 }}</p>
        </div>
        <div class="data-column">
          <p>原料仓料位低: {{ data?.raw_bin_level_low || 0 }}</p>
          <p>原料仓料位低低: {{ data?.raw_bin_level_low_low || 0 }}</p>
          <p>原料仓吸料盒料位1: {{ data?.raw_bin_suction_level1 || 0 }}</p>
          <p>原料仓吸料盒料位2: {{ data?.raw_bin_suction_level2 || 0 }}</p>
          <p>高混脉冲阀1: {{ data?.high_mixing_pulse_valve1 || 0 }}</p>
          <p>高混脉冲阀2: {{ data?.high_mixing_pulse_valve2 || 0 }}</p>
          <p>冷混脉冲阀1: {{ data?.cold_mixing_pulse_valve1 || 0 }}</p>
          <p>冷混脉冲阀2: {{ data?.cold_mixing_pulse_valve2 || 0 }}</p>
          <p>远程控制状态: {{ data?.remote_control_status || 0 }}</p>
          <p>碳酸钙吸料状态: {{ data?.calcium_carbonate_suction_status || 0 }}</p>
          <p>碳酸钙放料状态: {{ data?.calcium_carbonate_discharge_status || 0 }}</p>
          <p>白油配料状态: {{ data?.white_oil_batching_status || 0 }}</p>
          <p>白油放料状态: {{ data?.white_oil_discharge_status || 0 }}</p>
          <p>当前批次: {{ data?.current_batch || 0 }}</p>
          <p>高混状态: {{ data?.high_mixing_status || 0 }}</p>
          <p>原料仓吸料盒出料螺旋1频率: {{ data?.raw_bin_suction_screw1_freq || 0 }}</p>
          <p>原料仓吸料盒出料螺旋2频率: {{ data?.raw_bin_suction_screw2_freq || 0 }}</p>
          <p>原料仓吸料盒出料螺旋3频率: {{ data?.raw_bin_suction_screw3_freq || 0 }}</p>
          <p>吨包吸料盒出料螺旋1频率: {{ data?.ton_bag_suction_screw1_freq || 0 }}</p>
        </div>
        <div class="data-column">
          <p>吨包吸料盒出料螺旋2频率: {{ data?.ton_bag_suction_screw2_freq || 0 }}</p>
          <p>吨包吸料盒出料螺旋3频率: {{ data?.ton_bag_suction_screw3_freq || 0 }}</p>
          <p>高混机频率: {{ data?.high_mixing_frequency || 0 }}</p>
          <p>高混温度: {{ data?.high_mixing_temperature || 0 }}</p>
          <p>冷混温度: {{ data?.cold_mixing_temperature || 0 }}</p>
          <p>高混预混时间显示: {{ data?.high_mixing_premix_time || 0 }}</p>
          <p>高混混合时间显示: {{ data?.high_mixing_mixing_time || 0 }}</p>
          <p>高混排料时间显示: {{ data?.high_mixing_discharge_time || 0 }}</p>
          <p>真空吸料计量重量: {{ data?.vacuum_suction_metering_weight || 0 }}</p>
          <p>白油重量: {{ data?.white_oil_weight || 0 }}</p>
          <p>碳酸钙净重: {{ data?.calcium_carbonate_net_weight || 0 }}</p>
          <p>白油净重: {{ data?.white_oil_net_weight || 0 }}</p>
        </div>
      </div>
      <button  style="background-color: aqua;" @click="fetchData">刷新</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  
  export default defineComponent({
    name: 'Ceshi5',
    data() {
      return {
        data: null as any,
        
  
      }
    },
    methods: {
      fetchData() {
        axios.get('api/user/read_device2register1_48') // 替换为实际的后端接口
          .then(response => {
            this.data = response.data
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
      },

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