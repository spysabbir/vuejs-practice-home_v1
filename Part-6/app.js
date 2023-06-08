
const { createApp } = Vue

createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    inc(number){
      this.count = this.count + number;
    },
    dec(number){
      this.count = this.count - number;
    },
    test(event, number2){
      console.log('Test');
      console.log(number2);
      console.log(event);
    }
  }
}).mount('#app')