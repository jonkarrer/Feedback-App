<script lang="ts">
  import type { IReply } from "../../../utils/interfaces";
  export let replies: Array<IReply>;
</script>

{#if replies}
  <section>
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
        <p><b>{r.replyingTo}</b> {r.content}</p>
      </article>
    {/each}
  </section>
{:else}
  <slot />
{/if}

<style>
  section {
    display: grid;
    gap: 24px;

    padding-left: 24px;

    border-left: rgba(0, 0, 0, 0.2) 1px solid;
    margin-top: 8px;
  }
  article {
    display: grid;
    gap: 16px;
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
  a {
    font-size: 13px;
    font-weight: 600;
    color: #4661e6;
  }
</style>
