<script lang="ts">
  import type { IComment } from "../../../utils/interfaces";
  import Replies from "./Replies.svelte";

  export let comments: Array<IComment>;

  let replyCount = 0;
  for (const c of comments) {
    if (c.replies != undefined) replyCount += c.replies.length;
  }
</script>

<section>
  <h5>{comments.length + replyCount} Comments</h5>
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
      <p class="content">{c.content}</p>
      <Replies replies={c.replies} />
    </article>
  {/each}
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
  article {
    border-bottom: rgba(0, 0, 0, 0.05) 1px solid;
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

  a,
  h6,
  p {
    font-size: 13px;
  }
  h6 {
    color: #3a4374;

    font-weight: bold;
  }
  p {
    color: #647196;
  }
  a {
    font-weight: 600;
    color: #4661e6;
  }
  .content {
    margin-top: 16px;
  }
  /*Md*/
  @media (min-width: 768px) {
    img {
      width: 40px;
      border-radius: 100%;
      margin-right: 32px;
    }

    .content {
      margin-left: 74px;
    }
  }
</style>
