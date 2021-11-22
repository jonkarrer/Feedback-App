<script>
  import AddFeedback from "./AddFeedback.svelte";
</script>

<style>
  article {
    background: white;
    border-radius: 10px;
    height: 460px;
    width: 100%;
  }
  h1 {
    margin-top: 39px;
  }
  p {
    font-size: 13px;
    color: #647196;
    width: 278px;
    text-align: center;
    margin-top: 14px;
  }
  span {
    margin-top: 24px;
  }

</style>

<article class="grid place-content-center">
  <img class="auto" src="./assets/suggestions/illustration-empty.svg" alt="inspector icon for empty">
  <h1 class="auto">There is no feedback yet.</h1>
  <p>
    Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
  </p>
  <span class="auto">
    <AddFeedback />
  </span>
</article>