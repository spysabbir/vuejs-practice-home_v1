
const { createApp } = Vue

createApp({
  data() {
    return {
      activeClass: 'red',
    }
  },
  methods: {
    setClass(className){
      this.activeClass = className;
    }
  }
}).mount('#app')