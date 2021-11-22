<script>
  import Filter from "./Filter.svelte";
  import AddFeedback from "../AddFeedback.svelte";
</script>

<style>
  .wrapper {
    background: var(--navy);
    height: 56px;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="wrapper flex items-center justify-between">
  <Filter />
  <AddFeedback />
</div>

