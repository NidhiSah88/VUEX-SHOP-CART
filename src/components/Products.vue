<template>
<div>
    <ul class="products-listing">
    <li v-for="product in allProducts" :key="product.id">
        {{product.title}} | {{product.price | currency}}
    
        <button @click="deleteProduct(product.id)">X</button>
    </li>
    </ul>
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default{
    name: 'Products',
    filters: {
        currency: function(value){
            return "₹" + parseFloat(value).toFixed(2);
        }
    },
    computed: mapGetters(["allProducts"]),
    methods: {
        ...mapActions(["getProducts","deleteProduct"])

    },
    // added in life cycle method ..works like watch in vue3
    created(){
        this.getProducts
    }
    
}

</script>

<style scoped>
.products-listing li {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.products-listing li button {
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}

</style>
