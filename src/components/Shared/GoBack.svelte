<script>
  import { pop } from "svelte-spa-router";

  export let textColor = "#647196";
  export let iconColor = "#4661E6";
</script>

<span on:click={() => pop()}
  ><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M6 9L2 5l4-4"
      stroke={`${iconColor}`}
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    /></svg
  >
  <p style={`color:${textColor}`}>Go Back</p></span
>

<style>
  span {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: 10px;
    width: max-content;
  }
  span:hover {
    cursor: pointer;
  }
</style>
