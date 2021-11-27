<script>
  import { pop } from "svelte-spa-router";
</script>

<span on:click={() => pop()}
  ><img src="./assets/shared/icon-arrow-left.svg" alt="icon left arrow" />
  <p>Go Back</p></span
>

<style>
  span {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: 16px;
  }
</style>
