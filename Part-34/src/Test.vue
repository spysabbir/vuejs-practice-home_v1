<script>
import TheCard from './TheCard.vue';

export default {
  components: {
    TheCard,
},
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <div>
    <TheCard cardTitle="About Me">
      <div class="contact-details">
        <h1 class="contact-title">Contact Details</h1>
        <p><strong>Name: </strong>Sabbir Ahammed</p>
      </div>
    </TheCard>
    <TheCard cardTitle="Apple iPhone 14 Pro Max">
      <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg" alt="">
    </TheCard>
    <TheCard cardTitle="Services">
      OS:	iOS 16, upgradable to iOS 16.5, planned upgrade to iOS 17
      Chipset:	Apple A16 Bionic (4 nm)
      CPU:	Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)
      GPU:	Apple GPU (5-core graphics)
    </TheCard>
    <TheCard cardTitle="Default Check"></TheCard>
  </div>
</template>