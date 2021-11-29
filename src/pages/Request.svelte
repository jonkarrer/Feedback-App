<script lang="ts">
  import type { IFeedback } from "../../utils/interfaces";

  import Feedback from "../components/Home/Feedback.svelte";
  import Toolbar from "../components/Request/Toolbar.svelte";
  import Comments from "../components/Request/Comments.svelte";
  import AddComment from "../components/Request/AddComment.svelte";
  import { feedback } from "../../utils/store";

  export let params;

  let request: IFeedback;
  let data: Array<IFeedback>;

  $: {
    data = $feedback;
    request = data.filter((item) => item.id == params.id).pop();
  }
</script>

<main>
  {#if request}
    <Toolbar requestId={request.id} />
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

    padding: 34px 24px;

    max-width: 730px;
    margin: auto;
  }
</style>
