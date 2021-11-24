<script>
  export let open = false;
</script>

<div data-test="modal" class:open>
  <span
    >Most Upvotes <img
      src="./assets/shared/icon-check.svg"
      alt="check icon"
    /></span
  >
  <span>Least Upvotes</span>
  <span>Most Comments</span>
  <span>Least Comments</span>
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
    border-bottom: #979797 solid 1px;
    padding: 0 25px;
  }
  span:last-child {
    border: none;
  }
  span:hover {
    color: #ad1fea;
  }
</style>
