<script>
  import Empty from "./components/Home/Empty.svelte";
  import MobileHeader from "./components/Header/Mobile.svelte";
  import DesktopActionBar from "./components/ActionBar/Desktop.svelte";
  import DesktopHeader from "./components/Header/Desktop.svelte";
</script>

<MobileHeader />

<main>
  <div class="one">
    <DesktopHeader />
  </div>
  <div class="two">
    <DesktopActionBar />
  </div>
  <div class="wrapper three">
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

  .three {
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
    .three {
      margin-top: 24px;
    }
    .two {
      margin-top: 40px;
      width: 100%;
    }
    .one {
      width: 100%;
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
    .one {
      grid-row: 1 / span 2;
    }
    .two {
      margin-top: 0;
      width: 100%;
    }
    .three {
      margin-top: 0;

      height: 100%;
      background: white;
      display: flex;
      align-items: center;
    }
  }
</style>
