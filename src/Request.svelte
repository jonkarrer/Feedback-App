<script lang="ts">
  import { onMount } from "svelte";
  import type { IFeedback } from "../utils/interfaces";
  import getProductRequests from "../utils/getProductRequests";
  import Feedback from "./components/Home/Feedback.svelte";
  import Toolbar from "./components/Request/Toolbar.svelte";
  import Comments from "./components/Request/Comments.svelte";
  import AddComment from "./components/Request/AddComment.svelte";

  export let params;
  let request: IFeedback;

  onMount(async () => {
    const data = await getProductRequests();
    const singleItem = await data.filter((item) => item.id == params.id);
    request = singleItem[0];
    console.log(request);
  });
</script>

<main>
  <Toolbar />
  {#if request}
    <Feedback data={request} />
    <Comments comments={request.comments} />
    <AddComment />
  {:else}
    <h1>loading</h1>
  {/if}
</main>

<style>
  main {
    display: grid;
    grid: 44px auto / 1fr;
    gap: 24px;

    padding: 24px;

    max-width: 730px;
    margin: auto;
  }
</style>
