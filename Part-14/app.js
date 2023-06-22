
const { createApp } = Vue

createApp({
  data() {
    return {
      show: false,
      skills: [
        {name: 'Html', experience: 5},
        {name: 'Css', experience: 4},
        {name: 'Bootstrap', experience: 3},
        {name: 'Php', experience: 2},
        {name: 'Laravel', experience: 5},
        {name: 'Vue', experience: 1},
      ],
    }
  },
  methods: {
    toggle(){
      this.show = !this.show;
    },
  }
}).mount('#app')