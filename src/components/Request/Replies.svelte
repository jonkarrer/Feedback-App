<script lang="ts">
  import type { IReply } from "../../../utils/interfaces";
  export let replies: Array<IReply>;
</script>

{#if replies}
  <section>
    <div class="border" />
    {#each replies as r}
      <article>
        <span
          ><img src={r.user.image} alt="user's profile" />
          <div class="title">
            <h6>{r.user.name}</h6>
            <p>@{r.user.username}</p>
          </div>
          <a href="/">Reply</a>
        </span>
        <p class="content"><b>{r.replyingTo}</b> {r.content}</p>
      </article>
    {/each}
  </section>
{:else}
  <slot />
{/if}

<style>
  section {
    position: relative;
    display: grid;
    gap: 24px;

    padding-left: 24px;
    margin-left: 16px;

    border-left: rgba(0, 0, 0, 0.05) 1px solid;
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
  b {
    color: var(--pink);
  }
  a,
  h6,
  p {
    font-size: 13px;
  }
  a {
    font-weight: 600;
    color: #4661e6;
  }

  h6 {
    color: #3a4374;

    font-weight: bold;
  }
  p {
    color: #647196;
  }
  .content {
    margin-top: 6px;
  }
  /*Md*/
  @media (min-width: 768px) {
    img {
      width: 40px;
      border-radius: 100%;
      margin-right: 30px;
    }
    .content {
      margin-left: 74px;
    }
  }
</style>
