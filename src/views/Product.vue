<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos" v-if="product.fotos">
        <li v-for="(foto, index) in product.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo">
        </li>
      </ul>
      <div class="info">
      <h1>{{product.nome}}</h1>
      <p class="price">{{product.preco | numberPrice}}</p>
      <p class="description">{{product.descricao}}</p>
      <button class="btn" v-if="product.vendido === 'false'">Comprar</button>
      <button class="btn" v-else disabled>Produto Vendido</button>
    </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator'
import LoadingPage from '../components/LoadingPage.vue'
import { api } from '../services/services'

@Component({components: {LoadingPage}})
class Product extends Vue {
  @Prop() id

  product = null

  created(){
    this.product = null
    api.get(`/produto/${this.id}`).then(res => {
        this.product = res.data
    })
  }
}
export default Product
</script>
<style scoped>
  .product{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;
  }

  .price{
    color: #E80;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  .description{
    font-size: 1.2rem;
  }

  .btn{
    margin-top: 60px;
    width: 200px;
  }

</style>