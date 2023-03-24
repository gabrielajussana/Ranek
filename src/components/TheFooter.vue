<template>
    <footer>Ranek. Alguns direitos reservados.</footer>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
class TheFooter extends Vue{
    
}
export default TheFooter
</script>
<style scoped>
    footer{
        background: #87F;
        padding: 25px 0;
        text-align: center;
        font-size: 1.2rem;
        color: #FFF;
        position: relative;
        top: 75px;
    }
</style>