<template>
  <b-jumbotron v-bind:header="header" v-bind:lead="lead" text-variant="white" bg-variant="dark" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <slot />
  </b-jumbotron>
</template>

<style>
.jumbotron {
  margin-bottom: 0;
  border-radius: 0;
  text-align: center;
  background-size: cover;
  text-shadow: 1px 1px 4px #333;
  line-height: 1em;
}
.jumbotron h1 {
    font-size: 120px;
    font-weight: 600;
}

.jumbotron .lead {
    font-size: 30px;
    font-weight: 400;
}
</style>

<script>
export default {
   props: ['header', 'lead', 'image'],
}
</script>