<script lang="ts">
  import { Empty, MobileHeader, Panel, ActionBar } from "./components/index";
  import { onMount } from "svelte";
  import Feedback from "./components/Home/Feedback.svelte";
  import getFeedback from "../utils/getFeedback";
  import type { IFeedback } from "../utils/interfaces";

  let data;

  onMount(async () => {
    data = await getFeedback();
  });

  $: console.log(data);
</script>

<MobileHeader />
<main>
  <div class="panel">
    <Panel />
  </div>
  <div class="action">
    <ActionBar />
  </div>
  <div class="wrapper content">
    {#if data}
      {#each data as d}
        <Feedback data={d} />
      {/each}
    {:else}
      <Empty />
    {/if}
  </div>
</main>

<style>
  main {
    min-height: 100vh;

    margin: auto;

    padding-top: 128px;
  }

  .content {
    display: grid;
    gap: 16px;

    width: 100%;
    padding: 32px 24px;
  }

  /*Md*/
  @media (min-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 56px 24px;
    }
    .panel,
    .action,
    .content {
      width: 100%;
    }
    .action {
      margin-top: 40px;
    }
    .content {
      margin-top: 24px;
      background: white;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    main {
      display: grid;
      gap: 30px;
      grid: auto 1fr / 255px 1fr;
      align-items: flex-start;

      max-width: 1110px;
    }
    .panel {
      grid-row: 1 / span 2;
    }

    .content {
      display: flex;
      align-items: center;

      height: 100%;

      background: white;
    }
    .action,
    .content {
      margin-top: 0;
    }
  }
</style>
