<script lang="ts">
  import Catagories from "./Catagories.svelte";
  import Roadmap from "./Roadmap.svelte";

  export let open = false;
</script>

<nav data-test="navbar" class:open>
  <div class="wrapper">
    <Catagories />
    <Roadmap />
  </div>
</nav>

<style>
  nav {
    display: none;

    position: absolute;
    bottom: 0;
    right: 0;

    height: 100vh;
    width: 100%;

    background: rgba(0, 0, 0, 0.5);

    transform: translateY(100%);

    z-index: 100;
  }
  .open {
    display: block;
  }
  .wrapper {
    position: absolute;
    right: 0;
    top: 0;

    width: 271px;
    height: 100%;
    padding: 0 24px;
    padding-top: 24px;

    background: var(--lt-grey);
  }
</style>
