<template>
    <div>
      <h2>设备状态</h2>
      <div class="data-container">
        <div class="data-column">
          <p>风机: {{ data?.fan || 0 }}</p>
          <p>油泵: {{ data?.oil_pump || 0 }}</p>
          <p>原料仓震动: {{ data?.raw_bin_vibration || 0 }}</p>
          <p>原料仓吸料盒搅拌: {{ data?.raw_bin_suction_stir || 0 }}</p>
          <p>真空吸料计量仓震动: {{ data?.vacuum_suction_metering_vibration || 0 }}</p>
          <p>吨包吸料盒搅拌: {{ data?.ton_bag_suction_stir || 0 }}</p>
          <p>原料仓出料电机1: {{ data?.raw_bin_discharge_motor1 || 0 }}</p>
          <p>原料仓出料电机2: {{ data?.raw_bin_discharge_motor2 || 0 }}</p>
          <p>原料仓出料电机3: {{ data?.raw_bin_discharge_motor3 || 0 }}</p>
          <p>吨包出料电机1: {{ data?.ton_bag_discharge_motor1 || 0 }}</p>
          <p>吨包出料电机2: {{ data?.ton_bag_discharge_motor2 || 0 }}</p>
          <p>吨包出料电机3: {{ data?.ton_bag_discharge_motor3 || 0 }}</p>
          <p>高混: {{ data?.high_mixing || 0 }}</p>
          <p>冷混: {{ data?.cold_mixing || 0 }}</p>
          <p>计量上料机分配阀A: {{ data?.metering_feeder_distribution_valveA || 0 }}</p>
          <p>计量上料机分配阀B: {{ data?.metering_feeder_distribution_valveB || 0 }}</p>
          <p>计量上料机破空阀A: {{ data?.metering_feeder_break_vacuum_valveA || 0 }}</p>
          <p>计量上料机破空阀B: {{ data?.metering_feeder_break_vacuum_valveB || 0 }}</p>
          <p>计量上料机清洗阀A: {{ data?.metering_feeder_cleaning_valveA || 0 }}</p>
          <p>计量上料机清洗阀B: {{ data?.metering_feeder_cleaning_valveB || 0 }}</p>
        </div>
        <div class="data-column">
          <p>计量上料机反吹阀A: {{ data?.metering_feeder_reverse_blow_valveA || 0 }}</p>
          <p>计量上料机反吹阀B: {{ data?.metering_feeder_reverse_blow_valveB || 0 }}</p>
          <p>计量上料机进料阀1: {{ data?.metering_feeder_inlet_valve1 || 0 }}</p>
          <p>计量上料机进料阀2: {{ data?.metering_feeder_inlet_valve2 || 0 }}</p>
          <p>计量上料机进料阀3: {{ data?.metering_feeder_inlet_valve3 || 0 }}</p>
          <p>计量上料机进料阀4: {{ data?.metering_feeder_inlet_valve4 || 0 }}</p>
          <p>计量上料机放料阀: {{ data?.metering_feeder_discharge_valve || 0 }}</p>
          <p>计量上料机破风阀: {{ data?.metering_feeder_break_air_valve || 0 }}</p>
          <p>原料仓吸料盒补气阀1: {{ data?.raw_bin_suction_air_supplement_valve1 || 0 }}</p>
          <p>原料仓吸料盒补气阀2: {{ data?.raw_bin_suction_air_supplement_valve2 || 0 }}</p>
          <p>原料仓吸料盒补气阀3: {{ data?.raw_bin_suction_air_supplement_valve3 || 0 }}</p>
          <p>原料仓吸料盒清管阀1: {{ data?.raw_bin_suction_pipe_clean_valve1 || 0 }}</p>
          <p>原料仓吸料盒清管阀2: {{ data?.raw_bin_suction_pipe_clean_valve2 || 0 }}</p>
          <p>原料仓吸料盒清管阀3: {{ data?.raw_bin_suction_pipe_clean_valve3 || 0 }}</p>
          <p>白油补料阀: {{ data?.white_oil_supplement_valve || 0 }}</p>
          <p>白油放料阀: {{ data?.white_oil_discharge_valve || 0 }}</p>
          <p>高混锅盖阀: {{ data?.high_mixing_lid_valve || 0 }}</p>
          <p>高混放料阀: {{ data?.high_mixing_discharge_valve || 0 }}</p>
          <p>冷混锅盖阀: {{ data?.cold_mixing_lid_valve || 0 }}</p>
          <p>冷混放料阀: {{ data?.cold_mixing_discharge_valve || 0 }}</p>
        </div>
        <div class="data-column">
        <p>吨包吸料盒补气阀1: {{ data?.ton_bag_suction_air_supplement_valve1 || 0 }}</p>
        <p>吨包吸料盒补气阀2: {{ data?.ton_bag_suction_air_supplement_valve2 || 0 }}</p>
        <p>吨包吸料盒补气阀3: {{ data?.ton_bag_suction_air_supplement_valve3 || 0 }}</p>
        <p>吨包吸料盒清管阀1: {{ data?.ton_bag_suction_pipe_clean_valve1 || 0 }}</p>
        <p>吨包吸料盒清管阀2: {{ data?.ton_bag_suction_pipe_clean_valve2 || 0 }}</p>
        <p>吨包吸料盒清管阀3: {{ data?.ton_bag_suction_pipe_clean_valve3 || 0 }}</p>
        <p>碳酸钙吸料超时: {{ data?.calcium_carbonate_suction_timeout || 0 }}</p>
        <p>碳酸钙放料超时: {{ data?.calcium_carbonate_discharge_timeout || 0 }}</p>
        <p>白油配料超时: {{ data?.white_oil_batching_timeout || 0 }}</p>
        <p>白油放料超时: {{ data?.white_oil_discharge_timeout || 0 }}</p>
        </div>
      </div>
      <button style="background-color: aqua;"@click="device2connect">连接高低混小料配料系统</button>
    <button style="background-color: aqua;" @click="device2disconnect">断开连接</button>
    <button  style="background-color: aqua;" @click="fetchData">刷新</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  
  export default defineComponent({
    name: 'Ceshi4',
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
      device2connect(){
      axios.get('api/user/device2connect') // 替换为实际的后端接口
        .then(response => {
          
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    device2disconnect(){
      axios.get('api/user/device2disconnect') // 替换为实际的后端接口
        .then(response => {
          
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