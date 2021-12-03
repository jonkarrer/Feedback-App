<script lang="ts">
  import { push } from "svelte-spa-router";
  import type { IFeedback } from "../../../utils/interfaces";
  import Upvote from "./Upvote.svelte";

  export let data: IFeedback;

  let comments = data.comments === undefined ? "0" : data.comments.length;
  let catagory = data.category.charAt(0).toUpperCase() + data.category.slice(1);

  if (comments != "0") {
    let replyCount: any = 0;
    for (const c of data.comments) {
      if (c.replies != undefined) replyCount += c.replies.length;
    }
    comments = replyCount + comments;
  }
</script>

<article data-key={data.id} on:click={() => push(`/request/${data.id}`)}>
  <div class="content">
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <div class="category">{catagory}</div>
  </div>
  <Upvote upvotes={data.upvotes} />
  <span class="comments"
    ><img
      src="./assets/shared/icon-comments.svg"
      alt="icon comments"
    />{comments}</span
  >
</article>

<style>
  article {
    display: grid;
    grid: auto / 1fr 1fr;

    padding: 16px 16px;

    gap: 9px;
    height: 200px;

    border-radius: 10px;
  }
  .content {
    display: grid;
    gap: 10px;
    grid-column: 1 / span 2;
  }
  h3 {
    color: #3a4374;
    font-size: 13px;
    font-weight: bold;
  }
  p {
    font-size: 13px;
    color: #647196;
  }
  .category,
  .comments {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 8px;

    font-size: 13px;
    font-weight: bold;

    width: max-content;
    height: 30px;
    padding: 5px 16px;
  }
  .category {
    color: var(--blue);
    font-weight: 600;

    border-radius: 10px;
    background: var(--grey);
    margin-top: 4px;
  }
  .comments {
    justify-self: end;
  }
  article:hover {
    cursor: pointer;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
    article {
      gap: 16px;
    }
  }
</style>
