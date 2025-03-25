<template>
  <div>
    <h2>设备状态</h2>
    <div  class="data-container">
      <div class="data-column">
        <p>配料风机: {{ data?.ngredient_fan || 0 }}</p>
        <p>配料料斗震动: {{ data?.mixing_hopper_vibration || 0 }}</p>
        <p>小料上料风机: {{ data?.small_material_feeding_fan || 0 }}</p>
        <p>喂料机变频器: {{ data?.feeding_machine_frequency_converter || 0 }}</p>
        <p>小料配料上料机1: {{ data?.small_ingredient_feeder1 || 0 }}</p>
        <p>小料配料上料机2: {{ data?.small_ingredient_feeder2 || 0 }}</p>
        <p>小料配料上料机3: {{ data?.small_ingredient_feeder3 || 0 }}</p>
        <p>小料配料上料机4: {{ data?.small_ingredient_feeder4 || 0 }}</p>
        <p>小料配料上料机5: {{ data?.small_ingredient_feeder5 || 0 }}</p>
        <p>小料配料上料机6: {{ data?.small_ingredient_feeder6 || 0 }}</p>
        <p>喂料机1搅拌: {{ data?.feeding_machine_1_stir || 0 }}</p>
        <p>喂料机2搅拌: {{ data?.feeding_machine_2_stir || 0 }}</p>
        <p>喂料机3搅拌: {{ data?.feeding_machine_3_stir || 0 }}</p>
        <p>喂料机4搅拌: {{ data?.feeding_machine_4_stir || 0 }}</p>
        <p>喂料机5搅拌: {{ data?.feeding_machine_5_stir || 0 }}</p>
        <p>喂料机6搅拌: {{ data?.feeding_machine_6_stir || 0 }}</p>
        <p>喂料机1运行: {{ data?.feeding_machine_1 || 0 }}</p>
        <p>喂料机2运行: {{ data?.feeding_machine_2 || 0 }}</p>
        <p>喂料机3运行: {{ data?.feeding_machine_3 || 0 }}</p>
        <p>喂料机4运行: {{ data?.feeding_machine_4 || 0 }}</p>
      </div>
      <div class="data-column">
        <p>喂料机5运行: {{ data?.feeding_machine_5 || 0 }}</p>
        <p>喂料机6运行: {{ data?.feeding_machine_6 || 0 }}</p>
        <p>配料上料机1#分配阀: {{ data?.ingredient_feeder_1_Distribution_valve || 0 }}</p>
        <p>配料上料机1#进料阀: {{ data?.ingredient_feeder_1_Feed_valve || 0 }}</p>
        <p>配料上料机1#分配阀: {{ data?.ingredient_feeder_1_Discharge_valve || 0 }}</p>
        <p>喂料机1#出料阀: {{ data?.feeding_machine_1_discharge_valve || 0 }}</p>
        <p>配料上料机2#分配阀: {{ data?.ingredient_feeder_2_Distribution_valve || 0 }}</p>
        <p>配料上料机2#进料阀: {{ data?.ingredient_feeder_2_Feed_valve || 0 }}</p>
        <p>配料上料机2#分配阀: {{ data?.ingredient_feeder_2_Discharge_valve || 0 }}</p>
        <p>喂料机2#出料阀: {{ data?.feeding_machine_2_discharge_valve || 0 }}</p>
        <p>配料上料机3#分配阀: {{ data?.ingredient_feeder_3_Distribution_valve || 0 }}</p>
        <p>配料上料机3#进料阀: {{ data?.ingredient_feeder_3_Feed_valve || 0 }}</p>
        <p>配料上料机3#分配阀: {{ data?.ingredient_feeder_3_Discharge_valve || 0 }}</p>
        <p>喂料机3#出料阀: {{ data?.feeding_machine_3_discharge_valve || 0 }}</p>
        <p>配料上料机4#分配阀: {{ data?.ingredient_feeder_4_Distribution_valve || 0 }}</p>
        <p>配料上料机4#进料阀: {{ data?.ingredient_feeder_4_Feed_valve || 0 }}</p>
        <p>配料上料机4#分配阀: {{ data?.ingredient_feeder_4_Discharge_valve || 0 }}</p>
        <p>喂料机4#出料阀: {{ data?.feeding_machine_4_discharge_valve || 0 }}</p>
        <p>配料上料机5#分配阀: {{ data?.ingredient_feeder_5_Distribution_valve || 0 }}</p>
        <p>配料上料机5#进料阀: {{ data?.ingredient_feeder_5_Feed_valve || 0 }}</p>
      </div>
      <div class="data-column">
        <p>配料上料机5#分配阀: {{ data?.ingredient_feeder_5_Discharge_valve || 0 }}</p>
        <p>喂料机5#出料阀: {{ data?.feeding_machine_5_discharge_valve || 0 }}</p>
        <p>配料上料机6#分配阀: {{ data?.ingredient_feeder_6_Distribution_valve || 0 }}</p>
        <p>配料上料机6#进料阀: {{ data?.ingredient_feeder_6_Feed_valve || 0 }}</p>
        <p>配料上料机6#分配阀: {{ data?.ingredient_feeder_6_Discharge_valve || 0 }}</p>
        <p>喂料机6#出料阀: {{ data?.feeding_machine_6_discharge_valve || 0 }}</p>
        <p>配料风机破风阀: {{ data?.ingredient_fan_vent_valve || 0 }}</p>
        <p>上料风机破风阀: {{ data?.feeding_fan_vent_valve || 0 }}</p>
        <p>上料机7#分配阀: {{ data?.loading_machine_7_Distribution_valve || 0 }}</p>
        <p>上料机7#进料阀: {{ data?.loading_machine_7_Feed_valve || 0 }}</p>
        <p>上料机7#分配阀: {{ data?.loading_machine_7_Discharge_valve || 0 }}</p>
        <p>上料机7#管道震动阀: {{ data?.loading_machine_7_Pipeline_vibration_valve || 0 }}</p>
        <p>配料机1缺料: {{ data?.feeding_machine_1_Material_shortage || 0 }}</p>
        <p>配料机2缺料: {{ data?.feeding_machine_2_Material_shortage || 0 }}</p>
        <p>配料机3缺料: {{ data?.feeding_machine_3_Material_shortage || 0 }}</p>
        <p>配料机4缺料: {{ data?.feeding_machine_4_Material_shortage || 0 }}</p>
        <p>配料机5缺料: {{ data?.feeding_machine_5_Material_shortage || 0 }}</p>
        <p>配料机6缺料: {{ data?.feeding_machine_6_Material_shortage || 0 }}</p>
        <p>配料上料系统正在运行中: {{ data?.ingredient_feeder_machine_chifan || 0 }}</p>
        <p>喂料机1#喂料超时: {{ data?.feeding_machine1_timeout || 0 }}</p>
      </div>
      
    </div>
    <button  style="background-color: aqua;" @click="postLogin">连接高低混小料配料系统</button>
    <button  style="background-color: aqua;" @click="device1disconnect">断开连接</button>
    <button  style="background-color: aqua;" @click="fetchData">刷新</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'Ceshi2',
  data() {
    return {
      data: null as any,
      

    }
  },
  methods: {
    fetchData() {
      axios.get('api/main/read_device1register1_44') // 替换为实际的后端接口
        .then(response => {
          this.data = response.data
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    postLogin() {
      const payload = {
        no: 'sa',
        password: '123'
      };
      axios.post('api/user/login', payload) // 替换为实际的后端接口
        .then(response => {
          console.log('Login successful:', response.data.code);
          if(response.data.code == 200){
            console.log('登录成功');

          }
        })
        .catch(error => {
          console.error('Error during login:', error);
        });
    },
    device1connect(){
      axios.get('api/user/device1connect') // 替换为实际的后端接口
        .then(response => {
          
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    device1disconnect(){
      axios.get('api/user/device1disconnect') // 替换为实际的后端接口
        .then(response => {
          
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