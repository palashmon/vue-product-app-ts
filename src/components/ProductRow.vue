<template>
  <tr>
    <td>
      <span class="pl-4" :class="{ 'red': !product.stocked }">{{product.name}}</span>
    </td>
    <td>{{product.price}}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Product from '@/interfaces/Product';

@Component
export default class ProductRow extends Vue {
  @Prop() private product!: Array<Product>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: #dc3545;
}
</style>
