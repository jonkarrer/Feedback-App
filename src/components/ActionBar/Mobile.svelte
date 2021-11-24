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
    background: var(--navy);
    height: 56px;
    position: absolute;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 24px;
  }
</style>
