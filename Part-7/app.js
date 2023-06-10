
const { createApp } = Vue

createApp({
  data() {
    return {
     name: '',
    }
  },
  methods: {
    getKeyData(e){
      this.name = e.target.value;
    },
    formSubmit(){
      console.log('form submit');
    },
    cardClick(e){
      console.log('card click');
    },
    btnClick(e){
      // e.stopPropagation();
      console.log('btn click');
    }
  }
}).mount('#app')