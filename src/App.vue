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
import {Component, Vue} from 'vue-property-decorator'
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
</style>
