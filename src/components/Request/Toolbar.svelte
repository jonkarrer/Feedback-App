<script lang="ts">
  import GoBack from "../Shared/GoBack.svelte";
  import { push } from "svelte-spa-router";

  export let requestId: number;
</script>

<span>
  <GoBack />
  <button class="blue" on:click={() => push(`/edit/${requestId}`)}
    >Edit Feedback</button
  >
</span>

<style>
  span {
    display: flex;
    justify-content: space-between;
  }
  button {
    --w: 119px;
    --h: 40px;
    --font: 13px;
  }
</style>
