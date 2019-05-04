<template>
  <div id="app">
    <FilterableProductTable :products="products"/>
  </div>
</template>

<script lang="ts">
import JsonApi from './api';
import { Component, Vue } from 'vue-property-decorator';
import FilterableProductTable from './components/FilterableProductTable.vue';
import Product from '@/interfaces/Product';

@Component({
  components: {
    FilterableProductTable,
  },
})
export default class App extends Vue {
  products: Array<Product> = JsonApi.getAllProducts();
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
