<script lang="ts">
  import type { IReply } from "../../../utils/interfaces";
  import Reply from "./Reply.svelte";

  export let replies: Array<IReply>;
</script>

{#if replies}
  <section>
    <div class="border" />
    {#each replies as r}
      <Reply reply={r} />
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
    margin-top: 16px;

    border-left: rgba(0, 0, 0, 0.05) 1px solid;
  }
  /*Md*/
  @media (min-width: 768px) {
    section {
      margin-top: 0;
    }
  }
</style>
