<script>
  import { push } from "svelte-spa-router";

  // your script goes here
</script>

<!-- markup (zero or more items) goes here -->

<button class="pink" on:click={() => push("/addfeedback")}
  >+ Add Feedback</button
>

<style>
  button {
    --h: 40px;
    --w: 134px;
    --font: 13px;
  }
  /*Md*/
  @media (min-width: 768px) {
    button {
      --h: 44px;
      --w: 158px;
      --font: 14px;
    }
  }
</style>
