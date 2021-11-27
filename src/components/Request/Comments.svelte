<script lang="ts">
  import type { IComment } from "../../../utils/interfaces";
  import Replies from "./Replies.svelte";

  export let comments: Array<IComment>;
</script>

<section>
  <h1>{comments.length} Comments</h1>
  {#each comments as c}
    <article>
      <span
        ><img src={c.user.image} alt="user's profile" />
        <div class="title">
          <h6>{c.user.name}</h6>
          <p>@{c.user.username}</p>
        </div>
        <a href="/">Reply</a>
      </span>
      <p>{c.content}</p>
      <Replies replies={c.replies} />
    </article>
  {/each}
</section>

<style>
  section {
    background: white;
    padding: 24px;
  }
  article {
    display: grid;
    gap: 16px;
    border-bottom: rgba(0, 0, 0, 0.2) 1px solid;
    padding: 24px 0;
  }
  article:last-child {
    border: none;
    padding-top: 24px;
    padding-bottom: 0;
  }
  span {
    display: flex;
  }
  img {
    width: 40px;
    border-radius: 100%;
    margin-right: 16px;
  }
  .title {
    flex-grow: 1;
  }
  a {
    font-size: 13px;
    font-weight: 600;
    color: #4661e6;
  }
</style>
