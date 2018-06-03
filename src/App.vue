<template>
  <div id="app">
    <div id="bg-mask"></div>
    
    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight">
      <demo-calendar v-if="isCalendarShow" />
    </transition>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <demo-nav
        v-if="isNavBarShow"></demo-nav>
    </transition>

    <b-container fluid id="demo-container">
      <router-view id="demo-router-view" />
    </b-container>

    <b-jumbotron id="demo-footer" class="rounded-0 my-0">
      Copyright@2017-2018  ALL Rights Reseveed 最高人民检察院<br>
      建议使用1366*768分辨率 >= IE9 以上版本浏览器
    </b-jumbotron>
  </div>
</template>

<script>
import DemoNav from './components/utils/Nav.vue';
import DemoCalendar from './components/Calendar.vue';
const NAV_SHOWING_OFFSET_TOP = 200;

export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  computed: {
    isNavBarShow() {
      return this.scrollTop > NAV_SHOWING_OFFSET_TOP;
    },
    isCalendarShow() {
      return this.$store.state.showCalendar;
    }
  },
  components: {
    DemoNav, DemoCalendar
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScrollTop);
  },
  methods: {
    updateScrollTop() {
      this.scrollTop = window.scrollY;
    }
  }
}
</script>


<style lang="less">
body {
  background-color: #EFF3F6;
  background-image: url('./assets/banner-bg.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  user-select: none;
}

#demo-container {
  z-index: 1;
  position: relative;
  overflow: hidden;

  #demo-router-view {
    min-height: 800px;
  }
}

#bg-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  height: 100%;
  background-image: linear-gradient(
    rgba(3, 63, 91, 1), 
    rgba(255, 255, 255, .1) 30%,
    rgba(255, 255, 255, 1) 40%,
    #EFF3F6
  );
}

#demo-footer {
  background: #084059;
  color: #eee;
  text-align: center;
}
</style>
