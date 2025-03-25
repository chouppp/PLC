<template>
  <div>
    <h2>设备状态</h2>
    <div class="data-container">
      <div class="data-column">
        <p>风机: {{ data?.fan || 0 }}</p>
        <p>粉料1#仓吸料盒搅拌: {{ data?.powder_bin1_suction_stir || 0 }}</p>
        <p>粉料2#仓吸料盒搅拌: {{ data?.powder_bin2_suction_stir || 0 }}</p>
        <p>粉料1#仓震动: {{ data?.powder_bin1_vibration || 0 }}</p>
        <p>粉料2#仓震动: {{ data?.powder_bin2_vibration || 0 }}</p>
        <p>冷混1#下方卧式搅拌: {{ data?.cold_mixing1_horizontal_stir || 0 }}</p>
        <p>冷混2#下方卧式搅拌: {{ data?.cold_mixing2_horizontal_stir || 0 }}</p>
        <p>粉料1#仓1#真空罐分配阀: {{ data?.powder_bin1_vacuum_tank1_distribution_valve || 0 }}</p>
        <p>粉料1#仓1#真空罐破空阀: {{ data?.powder_bin1_vacuum_tank1_break_vacuum_valve || 0 }}</p>
        <p>粉料1#仓1#真空罐反吹阀: {{ data?.powder_bin1_vacuum_tank1_reverse_blow_valve || 0 }}</p>
        <p>粉料1#仓1#真空罐切换阀: {{ data?.powder_bin1_vacuum_tank1_switch_valve || 0 }}</p>
        <p>粉料1#仓2#真空罐分配阀: {{ data?.powder_bin1_vacuum_tank2_distribution_valve || 0 }}</p>
        <p>粉料1#仓2#真空罐破空阀: {{ data?.powder_bin1_vacuum_tank2_break_vacuum_valve || 0 }}</p>
        <p>粉料1#仓2#真空罐反吹阀: {{ data?.powder_bin1_vacuum_tank2_reverse_blow_valve || 0 }}</p>
        <p>粉料1#仓2#真空罐切换阀: {{ data?.powder_bin1_vacuum_tank2_switch_valve || 0 }}</p>
        <p>粉料2#仓1#真空罐分配阀: {{ data?.powder_bin2_vacuum_tank1_distribution_valve || 0 }}</p>
        <p>粉料2#仓1#真空罐破空阀: {{ data?.powder_bin2_vacuum_tank1_break_vacuum_valve || 0 }}</p>
        <p>粉料2#仓1#真空罐反吹阀: {{ data?.powder_bin2_vacuum_tank1_reverse_blow_valve || 0 }}</p>
        <p>粉料2#仓1#真空罐切换阀: {{ data?.powder_bin2_vacuum_tank1_switch_valve || 0 }}</p>
      </div>
      <div class="data-column">
        <p>粉料2#仓2#真空罐分配阀: {{ data?.powder_bin2_vacuum_tank2_distribution_valve || 0 }}</p>
        <p>粉料2#仓2#真空罐破空阀: {{ data?.powder_bin2_vacuum_tank2_break_vacuum_valve || 0 }}</p>
        <p>粉料2#仓2#真空罐反吹阀: {{ data?.powder_bin2_vacuum_tank2_reverse_blow_valve || 0 }}</p>
        <p>粉料2#仓2#真空罐切换阀: {{ data?.powder_bin2_vacuum_tank2_switch_valve || 0 }}</p>
        <p>仓切换阀: {{ data?.bin_switch_valve || 0 }}</p>
        <p>风机破风阀: {{ data?.fan_break_air_valve || 0 }}</p>
        <p>粉料1#仓气吹阀: {{ data?.powder_bin1_air_blow_valve || 0 }}</p>
        <p>粉料2#仓气吹阀: {{ data?.powder_bin2_air_blow_valve || 0 }}</p>
        <p>冷混1#下方暂存仓补气阀: {{ data?.cold_mixing1_storage_air_supplement_valve || 0 }}</p>
        <p>冷混1#下方暂存仓清管阀: {{ data?.cold_mixing1_storage_pipe_clean_valve || 0 }}</p>
        <p>冷混2#下方暂存仓补气阀: {{ data?.cold_mixing2_storage_air_supplement_valve || 0 }}</p>
        <p>冷混2#下方暂存仓清管阀: {{ data?.cold_mixing2_storage_pipe_clean_valve || 0 }}</p>
        <p>粉料1#仓放料阀: {{ data?.powder_bin1_discharge_valve || 0 }}</p>
        <p>粉料2#仓放料阀: {{ data?.powder_bin2_discharge_valve || 0 }}</p>
        <p>系统运行中: {{ data?.system_running || 0 }}</p>
        <p>急停中: {{ data?.emergency_stop || 0 }}</p>
        <p>粉料1#仓1#真空罐缺料: {{ data?.powder_bin1_vacuum_tank1_low || 0 }}</p>
        <p>粉料1#仓2#真空罐缺料: {{ data?.powder_bin1_vacuum_tank2_low || 0 }}</p>
        <p>粉料2#仓1#真空罐缺料: {{ data?.powder_bin2_vacuum_tank1_low || 0 }}</p>
        <p>粉料2#仓2#真空罐缺料: {{ data?.powder_bin2_vacuum_tank2_low || 0 }}</p>
      </div>
      <div class="data-column">
        <p>粉料1#仓高料位: {{ data?.powder_bin1_high_level || 0 }}</p>
        <p>粉料1#仓低料位: {{ data?.powder_bin1_low_level || 0 }}</p>
        <p>粉料2#仓高料位: {{ data?.powder_bin2_high_level || 0 }}</p>
        <p>粉料2#仓低料位: {{ data?.powder_bin2_low_level || 0 }}</p>
        <p>远程控制状态: {{ data?.remote_control_status || 0 }}</p>
      </div>
    </div>
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
        axios.get('api/user/read_device3register1_8') // 替换为实际的后端接口
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