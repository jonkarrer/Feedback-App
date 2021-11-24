<script>
  import Empty from "./components/Home/Empty.svelte";
  import MobileHeader from "./components/Header/Mobile.svelte";
  import DesktopActionBar from "./components/ActionBar/Desktop.svelte";
  import DesktopHeader from "./components/Header/Desktop.svelte";
</script>

<MobileHeader />

<main>
  <DesktopHeader />
  <DesktopActionBar />
  <section class="wrapper">
    <Empty />
  </section>
</main>

<style>
  main {
    display: grid;
    place-items: center;

    background: var(--lt-grey);
    min-height: 100vh;

    padding: 0 24px;
  }

  section {
    width: 100%;
    margin-top: 128px;
  }

  /*Md*/
  @media (min-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 56px 24px;
    }
    section {
      margin-top: 24px;
    }
  }
</style>
