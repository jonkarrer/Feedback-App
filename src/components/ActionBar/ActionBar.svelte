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
    background: var(--navy);
    height: 56px;
    position: fixed;
    top: 72px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;
  }
  /*Md*/
  @media (min-width: 768px) {
    .wrapper {
      position: static;

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
