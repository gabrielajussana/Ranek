<template>
  <section>
    <h1>Compre ou Venda</h1>
    <SearchProduct />
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ProductList from '@/components/ProductsList.vue'
import SearchProduct from '@/components/SearchProduct.vue'

@Component({components: { SearchProduct, ProductList}})
class Home extends Vue {
  
}
export default Home
</script>
<style scoped>
  h1 {
    font-size: 2rem;
    color: #87F;
    margin-top: 40px;
    text-align: center;
  }
</style>