<template>
  <a-layout>
    <Header />
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<script>
  import Header from '/@/components/Header/Header.vue';
  export default {
    name: 'App',
    components: {
      Header,
    },
  };
</script>
