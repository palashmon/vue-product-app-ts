<template>
  <div class="content-body" v-cloak>
    <table class="table table-sm table-hover">
      <thead class="thead-light">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in filteredProducts">
          <ProductRow v-if="row.isProductRow" :product="row.product" :key="row.product.id"/>
          <ProductCategoryRow v-else :category="row.product.category" :key="row.product.category"/>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductRow from './ProductRow.vue';
import ProductCategoryRow from './ProductCategoryRow.vue';
import Product from '@/interfaces/Product';

@Component({
  components: {
    ProductRow,
    ProductCategoryRow,
  },
})
export default class ProductTable extends Vue {
  @Prop() private filterText!: string;

  @Prop() private inStockOnly!: boolean;

  @Prop() private products!: Array<Product>;

  // computed properties
  get filteredProducts() {
    let lastCategory: string;
    const rows: Array<object> = [];

    this.products.forEach((product: Product) => {
      if (
        product.name.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      ) {
        return;
      }
      if (this.inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push({
          isProductRow: false,
          product,
        });
      }
      rows.push({
        isProductRow: true,
        product,
      });
      lastCategory = product.category;
    });

    return rows;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
  display: none;
}
</style>
