
const { createApp } = Vue

createApp({
  data() {
    return {
      number: '',
      result: '',
    }
  },
  methods: {
    // inputData(e){
    //   this.number = e.target.value;
    // },
    getDubble(){
      this.result = this.number * 2;
    },
    getSquare(){
      this.result = this.number * this.number;
    },
    addTen(){
      this.result = this.number + 10;
    },
    reset(){
      this.number = '';
      this.result = '';
    }
  }
}).mount('#app')