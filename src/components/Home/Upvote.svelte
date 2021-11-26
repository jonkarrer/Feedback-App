<script>
</script>

<span class="upvotes"
  ><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M1 6l4-4 4 4"
      stroke="#4661E6"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    /></svg
  ><slot /></span
>

<style>
  .upvotes {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 8px;

    font-size: 13px;
    font-weight: bold;

    width: max-content;
    height: 30px;
    padding: 5px 16px;

    border-radius: 10px;
    background: var(--grey);
  }
  /*Md*/
  @media (min-width: 768px) {
    .upvotes {
      order: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 53px;
      width: 40px;
    }
  }
</style>
