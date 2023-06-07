
const { createApp } = Vue

createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    getCurrentTime(){
      return new Date;
    },
    inc(){
      this.count++
    },
    dec(){
      this.count--
    },
  }
}).mount('#app')