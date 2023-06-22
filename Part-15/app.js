
const { createApp } = Vue

createApp({
  data() {
    return {
      review:'',
      skills: [
        {name: 'Html', experience: 5},
        {name: 'Css', experience: 4},
        {name: 'Bootstrap', experience: 3},
      ],
    }
  },

  computed: {
    totalSkill(){
      console.log('Count from computed');
      return this.skills.length
    },
    topskills() {
      let ts = this.skills.filter(item => {
        return item.experience >= 3
      });
      return ts;
    }
  },

  methods: {
    removeSkill(index){
      this.skills.splice(index, 1);
    },
    countSkill(){
      console.log('Count from methods');
      return this.skills.length
    }
  }
}).mount('#app')