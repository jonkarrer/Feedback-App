<script>
  export let upvotes;

  let switchColor = false;

  function handleClick() {
    switchColor = !switchColor;

    upvotes += 1;

    //Send new data to backend
  }
</script>

<span
  style={`color: ${switchColor ? "white" : "#3a4374"}; background: ${
    switchColor ? "var(--blue)" : ""
  };`}
  on:click={(e) => {
    handleClick();
    e.stopPropagation();
  }}
  ><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke={`${switchColor ? "white" : "blue"}`}
      d="M1 6l4-4 4 4"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    /></svg
  >
  {upvotes}
</span>

<style>
  span {
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

  /*Lg*/
  @media (min-width: 1024px) {
    span {
      height: 40px;
    }
  }
</style>
