<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view/>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'


@Component({components: { TheHeader, TheFooter}})

class App extends Vue {
  
}

export default App
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body, ul, li, h1, h2, p {
    margin: 0px;
    padding: 0px;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    color: #345;
    background: url(./assets/pattern.svg) repeat top;
  }

  a {
    color: #345;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .btn {
    display: block;
    padding: 10px 30px;
    background: #87F;
    border-radius: 4px;
    color: #FFF;
    text-align: center;
    font-size: 1rem;
    box-shadow: 4px 8px rgba(30, 60, 90, 0.2);
    transition: all .3s;
    border: none;
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

  .btn:hover{
    background:#65D;
    transform: scale(1.1);
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #main {
    flex: 1;
  }

  input, 
  textarea{
    border-radius: 4px;
    border: 1px solid white;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
    font-size: 1rem;
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
  }

  input:hover, input:focus,
  textarea:focus, textarea:hover{
   outline: none;
   box-shadow: 0 6px 12px rgba(30, 60, 90 0.2);
   border-color: #87F;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter{
    transform: translate3d(0, -20px, 0);
  }

  .v-leave-to{
    transform: translate3d(0, 20px, 0);
  }

  .v-enter-acvtive,
  .v-leave-active{
    transition: all 0.3s;
  }
</style>
