<script>
  export let open = false;
  export let changeSortType;

  let check = "Most Upvotes";

  function handleClick(targetText) {
    changeSortType(targetText);
    check = targetText;
  }
</script>

<div data-test="modal" class:open>
  <span on:click={(e) => handleClick(e.currentTarget.innerText)}
    >Most Upvotes <img
      class={check === "Most Upvotes" ? "check" : "uncheck"}
      src="./assets/shared/icon-check.svg"
      alt="check icon"
    /></span
  >
  <span on:click={(e) => handleClick(e.currentTarget.innerText)}
    >Least Upvotes <img
      class={check === "Least Upvotes" ? "check" : "uncheck"}
      src="./assets/shared/icon-check.svg"
      alt="check icon"
    /></span
  >
</div>

<style>
  div {
    display: none;
    position: absolute;
    top: 60px;

    height: 192px;
    width: 255px;

    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 40px -7px rgba(0, 0, 0, 0.35);
  }
  .open {
    display: grid;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #647196;
    border-bottom: rgba(124, 65, 65, 0.1) solid 1px;
    padding: 0 25px;
  }
  span:last-child {
    border: none;
  }
  span:hover {
    color: #ad1fea;
  }

  .check {
    display: block;
  }
  .uncheck {
    display: none;
  }
</style>
