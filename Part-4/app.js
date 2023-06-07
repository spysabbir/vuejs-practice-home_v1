
const { createApp } = Vue

createApp({
  data() {
    return {
      tutorialInfo: {
        name: 'Vue js 3 tutoria.',
        githubLink: 'https://github.com/',
      },
      htmlTag: '<a href="https://www.spysabbir.com/" target="_blank">Spy Sabbir Link</a>',
    }
  }
}).mount('#app')