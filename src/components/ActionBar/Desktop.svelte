<script>
  import Filter from "./Filter.svelte";
  import AddFeedback from "../Shared/AddFeedback.svelte";
  import Suggest from "./Suggest.svelte";
</script>

<div class="wrapper">
  <Suggest />
  <Filter />
  <AddFeedback />
</div>

<style>
  .wrapper {
    display: none;
  }
  /*Md*/
  @media (min-width: 768px) {
    .wrapper {
      display: grid;
      grid: auto-flow / auto auto 1fr;
      gap: 40px;

      align-items: center;
      justify-items: flex-end;

      border-radius: 10px;

      height: 72px;
      padding: 0 12px;
      margin: auto;

      background: var(--navy);
    }
  }
</style>
