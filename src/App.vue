<template>
  <the-header />
  <div class="main">
    <the-navbar />
    <the-content class="content" />
  </div>
</template>

<script>
//1. Import components
import TheHeader from './components/layout/TheHeader.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheContent from './components/layout/TheContent.vue'
export default {
  name: 'App',
  components: {
    //2. Register components
    TheHeader,
    TheNavbar,
    TheContent
  }
}
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
  font-family: GoogleSands;
  box-sizing: border-box;
} */

.content {
  position: relative;
  top: 50%;
  right: 50%;
}
</style>
