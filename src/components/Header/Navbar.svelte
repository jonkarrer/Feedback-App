<script lang="ts">
  import Catagories from "./Catagories.svelte";

  export let open = false;
</script>

<nav class:open>
  <div class="wrapper">
    <Catagories />
  </div>
</nav>

<style>
  nav {
    display: none;

    position: absolute;
    bottom: 0;
    right: 0;

    height: calc(100vh - 72px);

    width: 100%;

    background: rgba(0, 0, 0, 0.5);

    transform: translateY(100%);

    z-index: 100;
  }
  .wrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: 271px;
    height: 100%;
    background: var(--lt-grey);
  }
  .open {
    display: block;
  }
</style>
