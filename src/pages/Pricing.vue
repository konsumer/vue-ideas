<template>
  <div>
    <Header />
    <Hero header="Pricing" image="http://cdn.shopify.com/s/files/1/1619/4221/products/HDR0206_1b2d4663-ae16-4485-a93c-0b1e974e0c11_grande.jpg" />
    <Content>
    <h2>Pricing</h2>
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
