<template>
  <div class="app">
    <div class="snackbar-holder">
      <vue-alert></vue-alert>
    </div>
    <router-view />
  </div>
</template>

<style>
.snackbar-holder {
  position: absolute;
  right: 10px;
  bottom: 0;
  z-index: 10000;
  width: 50vw;
}

.snackbar-holder p {
  margin: 0;
}

.alert {
  -webkit-animation-duration: 0.25s;
  -moz-animation-duration: 0.25s;
  -ms-transition-animation-duration: 0.25s;
}

.app {
  min-height: 100vh;
}
</style>