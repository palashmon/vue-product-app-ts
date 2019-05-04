<template>
  <div class="container shadow-lg p-4 mb-4">
    <div class="pb-2 mt-4 mb-4 border-bottom">
      <h1>Simple Product Table + Typescript 3.4</h1>
    </div>
    <div class="content-main">
      <SearchBar
        :filterText="filterText"
        :inStockOnly="inStockOnly"
        @inStockChanged="onInStockChanged"
        @filterTextChanged="onTextChange"
      />
      <ProductTable :products="products" :filterText="filterText" :inStockOnly="inStockOnly"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SearchBar from './SearchBar.vue';
import ProductTable from './ProductTable.vue';
import Product from '@/interfaces/Product';

@Component({
  components: {
    SearchBar,
    ProductTable,
  },
})
export default class FilterableProductTable extends Vue {
  @Prop() private products!: Array<Product>;

  // initial data
  filterText = '';

  inStockOnly = false;

  // method
  onTextChange(value: string) {
    this.filterText = value;
  }

  onInStockChanged(value: boolean) {
    this.inStockOnly = value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 750px;
}
</style>
