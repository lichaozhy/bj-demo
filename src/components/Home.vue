<template>
  <b-container id="home">
    <demo-jumbotron></demo-jumbotron>
    <demo-framework></demo-framework>
  </b-container>
</template>

<script>
import DemoJumbotron from './utils/Jumbotron.vue';
import DemoFramework from './utils/Framework.vue';

export default {
  components: {
    DemoJumbotron,
    DemoFramework
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="less">

</style>
