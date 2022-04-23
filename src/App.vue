<template>
  <div id="app">
  <AddProducts/>
  <Products/>  
    
  </div>
</template>

<script>
import AddProducts from './components/AddProducts.vue'
import Products from './components/Products.vue'


export default {
  name: 'App',
  components: {
    AddProducts,
    Products,

  }
}
</script>

<style>
  *,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  padding-top: 30px;
}
#app {
  max-width: 700px;
  margin: 0 auto;
}
</style>
