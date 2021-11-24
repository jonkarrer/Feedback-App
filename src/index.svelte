<script>
  import Empty from "./components/Home/Empty.svelte";
  import MobileHeader from "./components/Header/Mobile.svelte";

  import Panel from "./components/Header/Panel.svelte";
  import ActionBar from "./components/ActionBar/ActionBar.svelte";
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
    <Empty />
  </div>
</main>

<style>
  main {
    display: grid;

    min-height: 100vh;

    margin: auto;
  }

  .content {
    width: 100%;
    padding: 0 24px;
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
