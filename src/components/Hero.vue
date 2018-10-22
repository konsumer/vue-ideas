<template>
  <b-jumbotron v-bind:header="header" v-bind:lead="lead" text-variant="white" bg-variant="dark" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <slot />
  </b-jumbotron>
</template>

<script>
export default {
   props: ['header', 'lead', 'image'],
}
</script>