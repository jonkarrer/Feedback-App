<script lang="ts">
  import type { IComment } from "../../../utils/interfaces";
  import Comment from "./Comment.svelte";

  export let comments: Array<IComment> | undefined;

  let replyCount = 0;
  if (comments) {
    for (const c of comments) {
      if (c.replies != undefined) replyCount += c.replies.length;
    }
  }
</script>

<section>
  {#if comments}
    <h5>{comments.length + replyCount} Comments</h5>
    {#each comments as c}
      <Comment {c} />
    {/each}
  {:else}
    <h5>No comments</h5>
  {/if}
</section>

<style>
  section {
    background: white;

    padding: 24px;
    height: fit-content;

    border-radius: 10px;
  }
  h5 {
    color: #3a4374;
    font-size: 18px;
    font-weight: bold;
  }
</style>
