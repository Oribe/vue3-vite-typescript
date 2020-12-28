<template>
  <a-form>
    <a-form-item label="userName">
      <a-input v-model="userInfo.userName" />
    </a-form-item>
    <a-form-item label="password">
      <a-input v-model="userInfo.password" type="password" />
    </a-form-item>
  </a-form>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        title: '登陆页面',
        userInfo: {
          userName: '',
          password: '',
        },
      };
    },
  };
</script>
