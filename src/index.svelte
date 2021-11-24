<script>
  import Empty from "./components/Home/Empty.svelte";
  import MobileHeader from "./components/Header/Mobile.svelte";
</script>

<MobileHeader />

<main class="wrapper grid place-items-center">
  <Empty />
</main>

<style>
  main {
    background: var(--lt-grey);
    min-height: 100vh;
  }
</style>
