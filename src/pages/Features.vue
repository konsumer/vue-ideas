<template>
  <div>
    <Header />
     <Hero header="Features" lead="Here is the lead" image="https://www.theatreworldbackdrops.com/Image/BackdropImage/Large/Foggy-Forest-Daybreak-Scenic-Backdrop.jpg" />
    <Content>
    <h2>Features</h2>
    </Content>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
import Hero from '../components/Hero.vue'
export default {
  components: {
    Header,
    Content,
    Hero
  }
}
</script>
