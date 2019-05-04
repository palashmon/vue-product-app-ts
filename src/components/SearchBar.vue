<template>
  <div class="content-header">
    <div class="content-info">
      <form>
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-block mb-2"
          autofocus
          autocomplete="off"
          @change="onTextChange"
        >
        <p class="mb-5">
          <input type="checkbox" @change="onInStockChange"> Only show
          products in stock
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class SearchBar extends Vue {
  @Prop() private filterText!: string;
  @Prop() private inStockOnly!: boolean;

  // Using @Emit decorator
  @Emit("filterTextChanged")
  onTextChange(event: Event) {
    return (<HTMLInputElement>event.target).value;
  }

  @Emit("inStockChanged")
  onInStockChange(event: Event) {
    return (<HTMLInputElement>event.target).checked;
  }
}
</script>
