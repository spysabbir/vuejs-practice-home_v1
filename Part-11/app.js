
const { createApp } = Vue

createApp({
  data() {
    return {
      // skills: ['Html', 'Css', 'Bootstrap', 'JavaScript', 'jQuery'],
      // newSkill:'',
      skills: [
        {
          name: 'Html', experience: 5,
        },
        {
          name: 'Css', experience: 4,
        },
        {
          name: 'Bootstrap', experience: 3,
        },
      ],
      newSkill: {name: '', experience: 0},
    }
  },
  methods: {
    // addSkill(){
    //   this.skills.push(this.newSkill);
    //   this.newSkill = '';
    // },
    // removeSkill(index){
    //   this.skills.splice(index, 1);
    // }
    addSkill(){
      this.skills.push(this.newSkill);
      this.newSkill = {};
    },
    removeSkill(index){
      this.skills.splice(index, 1);
    }
  }
}).mount('#app')