<!-- filepath: c:\Users\10929\Desktop\js\PLC\PLC\src\views\login.vue -->
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Cookies from 'js-cookie'
export default {
  name:'login',
  data() {
    return {
      username: '',
      password: '',
      loggedIn: false,
    }
  },
  methods: {
    login() {
      // 简单的登录逻辑
      if (this.username === 'admin' && this.password === '12345') {
        Cookies.set('loggedIn', 'true')
        this.requestFullScreen();
        this.$router.push('/');
      } else {
        alert('Invalid credentials')
      }
    },
    requestFullScreen() {
      const docElm = document.documentElement;
        docElm.requestFullscreen();
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>