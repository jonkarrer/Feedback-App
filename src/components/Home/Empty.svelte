<script>
  import AddFeedback from "../Shared/AddFeedback.svelte";
</script>

<article class="grid place-content-center">
  <img
    src="./assets/suggestions/illustration-empty.svg"
    alt="inspector icon for empty"
  />
  <h1>There is no feedback yet.</h1>
  <p>
    Got a suggestion? Found a bug that needs to be squashed? We love hearing
    about new ideas to improve our app.
  </p>
  <span>
    <AddFeedback />
  </span>
</article>

<style>
  article {
    height: 460px;
    width: 100%;

    align-self: center;

    background: white;
    border-radius: 10px;
  }
  p {
    font-size: 13px;
    color: #647196;
    text-align: center;

    width: 278px;
    margin-top: 14px;
  }
  img,
  span {
    margin: auto;
  }
  h1 {
    text-align: center;
    margin-top: 39px;
  }
  span {
    margin-top: 24px;
  }
  /*Md*/
  @media (min-width: 768px) {
    p {
      width: 410px;
      font-size: 16px;
    }
  }
</style>
