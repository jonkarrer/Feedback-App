<script>
  import Empty from "./comppanelnts/Home/Empty.svelte";
  import MobileHeader from "./comppanelnts/Header/Mobile.svelte";
  import DesktopActionBar from "./comppanelnts/ActionBar/Desktop.svelte";
  import DesktopHeader from "./comppanelnts/Header/Desktop.svelte";
</script>

<MobileHeader />

<main>
  <div class="panel">
    <DesktopHeader />
  </div>
  <div class="action">
    <DesktopActionBar />
  </div>
  <div class="wrapper content">
    <Empty />
  </div>
</main>

<style>
  main {
    display: grid;

    min-height: 100vh;

    padding: 0 24px;
    margin: auto;
  }

  .content {
    width: 100%;
  }

  /*Md*/
  @media (min-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 56px 24px;
    }

    .action {
      margin-top: 40px;
    }
    .content {
      margin-top: 24px;
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
