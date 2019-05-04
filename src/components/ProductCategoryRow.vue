<template>
  <tr>
    <th colspan="2" class="text-success text-uppercase">{{ category }}</th>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductCategoryRow extends Vue {
  @Prop() private category!: string;
}
</script>
