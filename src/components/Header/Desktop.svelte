<script>
  import Catagories from "./Catagories.svelte";
  import Roadmap from "./Roadmap.svelte";
  import Gradient from "./Gradient.svelte";
</script>

<header class="wrapper">
  <Gradient />
  <Catagories />
  <Roadmap />
</header>

<style>
  header {
    display: none;
  }
  /*Md*/
  @media (min-width: 768px) {
    header {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>
