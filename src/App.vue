<!-- filepath: c:\Users\10929\Desktop\js\PLC\PLC\src\App.vue -->
<template>
  
    <router-view class="router-view"></router-view>

</template>

<script lang="ts">
export default {
  name: 'App',
  methods: {
    goToCeshi1() {
      this.$router.push('/ceshi1')
    },
    goToCeshi2() {
      this.$router.push('/ceshi2')
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.router-view {
  height: 80%;
  width: 80%;
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>