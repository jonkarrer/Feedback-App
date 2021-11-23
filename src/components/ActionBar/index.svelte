<script>
  import Filter from "./Filter.svelte";
  import AddFeedback from "../Shared/AddFeedback.svelte";
</script>

<!-- markup (zero or more items) goes here -->

<div class="wrapper flex items-center justify-between">
  <Filter />
  <AddFeedback />
</div>

<style>
  .wrapper {
    background: var(--navy);
    height: 56px;
    position: absolute;
    width: 100%;
  }
</style>
