<template>
    <section class="products-container">
        <transition mode="out-in">
            <div v-if="products && products.length" class="products" key="products">
            <div class="product" v-for="product in products" :key="product.id">
                <router-link :to="{name: 'product', params: {id: product.id} }">
                    <img v-if="product.fotos" :src="product.fotos[0].src" :key="product.fotos[0].titulo">
                    <p class="price">{{product.preco | numberPrice}}</p>
                    <h2 class="title">{{product.nome}}</h2>
                    <p>{{product.descricao}}</p>
                </router-link>
            </div>
            <PaginateProducts :productsTotal="productsTotal" :productsPerPage="productsPerPage"/>
            </div>
            <div class="no-results" v-else-if="products && products.length === 0" key="no-results">
                <p>Busca sem resultados. Tente buscar outro termo.</p>
            </div>
            <LoadingPage v-else key="loading" />
        </transition>
    </section>
</template>
<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { api } from '../services/services'
import { serialize } from '../helpers/helpers'
import PaginateProducts from './PaginateProducts.vue'
import LoadingPage from './LoadingPage.vue'

@Component({components: {PaginateProducts, LoadingPage}})
class ProductList extends Vue{
    products = null
    productsPerPage = 9
    productsTotal = 0

    @Watch('url')
    onUrlChanged(newVal, oldVal){
        this.getProducts();
    }

    get url(){
        const query = serialize(this.$route.query);
        return `/produto?_limit=${this.productsPerPage}${query}`
    }

    getProducts(){
      this.produtos = null;
      api.get(this.url).then((res) => {
        this.productsTotal = Number(res.headers["x-total-count"]);
        this.products = res.data;
      })
    }

    created(){
      this.getProducts();
    }
}
export default ProductList 
</script>
<style scoped>
    .products-container{
        max-width: 1000px;
        margin: 0 auto;
    }

    .products{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        margin: 30px;
    }

    .product{
        box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
        padding: 10px;
        background: #FFF;
        border-radius: 4px;
        transition: all 0.2s;
    }

    .product:hover{
        box-shadow: 0 6px 12x rgba(30, 60, 90, 0.2);
        transform: scale(1.1);
        position: relative;
        z-index: 1;
    }

    .product img{
        border-radius: 4px;
        margin-bottom: 20px;
    }

    .title{
        margin-bottom: 10px;
    }

    .price{
        color: #E80;
        font-weight: bold;
    }

    .no-results{
        text-align: center;
    }
    
</style>