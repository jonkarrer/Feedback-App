<script lang="ts">
  import { onMount } from "svelte";
  import type { IFeedback } from "../utils/interfaces";
  import getProductRequests from "../utils/getProductRequests";
  import Feedback from "./components/Home/Feedback.svelte";
  import Toolbar from "./components/Request/Toolbar.svelte";

  export let params;
  let request: IFeedback;

  onMount(async () => {
    const data = await getProductRequests();
    const singleItem = await data.filter((item) => item.id == params.id);
    request = singleItem[0];
  });
</script>

<main>
  <Toolbar />
  {#if request}
    <Feedback data={request} />
  {:else}
    <h1>loading</h1>
  {/if}
</main>

<style>
  main {
    display: grid;
    grid: 44px auto / 1fr;
    gap: 24px;

    min-height: 100vh;
    padding: 24px;
  }

  button {
    --w: 119px;
    --h: 40px;
    --font: 13px;
  }
</style>
