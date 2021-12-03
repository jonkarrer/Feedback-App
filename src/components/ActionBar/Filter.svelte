<script lang="ts">
  import Modal from "./Modal.svelte";
  import { sort } from "../../../utils/sortStore";

  let isModalOpen = false;
  let rotate = false;

  function handleClick() {
    isModalOpen = !isModalOpen;
    rotate = !rotate;
  }

  $: sortType = $sort;

  function changeSortType(newType) {
    sort.set(newType);
  }
</script>

<div data-test="filter" on:click={handleClick} class="flex items-center">
  <p>Sort by : <b>{sortType}</b></p>

  <svg class:rotate width="10" height="7" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1l4 4 4-4"
      stroke="#ffffff"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>

  <Modal {changeSortType} open={isModalOpen} />
</div>

<style>
  div {
    position: relative;
  }
  p {
    color: #f2f4fe;
    font-size: 13px;
  }
  svg {
    margin-left: 8px;
  }
  .rotate {
    transform: rotate(180deg);
  }
  /*Md*/
  @media (min-width: 768px) {
    p {
      font-size: 14px;
    }
    div:hover {
      cursor: pointer;
    }
  }
</style>
