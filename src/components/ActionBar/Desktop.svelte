<script>
  import Filter from "./Filter.svelte";
  import AddFeedback from "../Shared/AddFeedback.svelte";
</script>

<div class="wrapper">
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
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-radius: 10px;

      height: 72px;
      width: 100%;
      padding: 0 12px;
      margin-top: 40px;

      background: var(--navy);
    }
  }
</style>
