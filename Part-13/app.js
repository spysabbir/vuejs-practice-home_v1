
const { createApp } = Vue

createApp({
  data() {
    return {
      aboutMe: {
        name: "Sabbir Ahammed",
        nickName: "Sovon",
        web: 'https://spysabbir.com/'
      },
      skills: [
        {name: 'Html', experience: 5},
        {name: 'Css', experience: 4},
        {name: 'Bootstrap', experience: 3},
      ],
    }
  },
  methods: {
   
  }
}).mount('#app')