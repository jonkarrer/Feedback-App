<script>
  import GoBack from "../Shared/GoBack.svelte";
</script>

<span>
  <GoBack />
  <button class="blue">Edit Feedback</button>
</span>

<style>
  span {
    display: flex;
    justify-content: space-between;
  }
  button {
    --w: 119px;
    --h: 40px;
    --font: 13px;
  }
</style>
