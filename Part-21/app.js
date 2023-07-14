// Option One
// const { createApp } = Vue
// createApp({
//   data() {
//     return {
//       name: '',
//     }
//   },
//   methods: {
//     clear(){
//       this.name = '';
//     },
//   }
// }).mount('#app')

// Option Two
var data = {
  name: '',
  age: 10
};
var handler = {
  set(target, key, value){
    console.log(target);
    console.log(key);
    console.log(value);

    if(key === 'name'){
      var outputElement = document.querySelector('#output');
      outputElement.innerHTML = value;
    }

  }
};
var proxyData = new Proxy(data, handler);
proxyData.name = 'Sovon';
// data.name = 'Sabbir';
