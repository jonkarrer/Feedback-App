<script>
  export let category;
  category = category.charAt(0).toUpperCase() + category.slice(1);
  let options = ["Enhancement", "Bug", "Feature", "UI", "UX"];

  let toggle = false;
  let rotate = false;
  function handleClick() {
    toggle = !toggle;
    rotate = !rotate;
  }
</script>

<section>
  <h6>Catagory</h6>
  <p>Choose a category for your feedback</p>
  <div on:click={handleClick} class="dropdown">
    <p>{category}</p>
    <svg class:rotate width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4 4 4-4"
        stroke="#4661E6"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  </div>
  <menu class:toggle>
    {#each options as opt}
      <span
        on:click={(e) => {
          category = e.target.innerText;
          toggle = !toggle;
          rotate = !rotate;
        }}
        >{opt.charAt(0).toUpperCase() + opt.slice(1)}
        <img
          class={opt === category ? "check" : "uncheck"}
          src="./assets/shared/icon-check.svg"
          alt="check icon"
        />
      </span>
    {/each}
  </menu>
</section>

<style>
  section {
    position: relative;
  }
  .dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    width: 100%;
    padding: 15px 16px;
    margin-top: 16px;

    border: none;
    border-radius: 10px;
    background: #f7f8fd;
  }
  .dropdown:hover {
    cursor: pointer;
  }
  h6 {
    font-weight: bold;
    line-height: 1.8;
  }
  p,
  h6,
  ::placeholder {
    font-size: 13px;
    color: #3a4374;
    font-family: Jost, sans-serif;
  }
  menu {
    display: none;
    position: absolute;
    top: 125px;

    height: 192px;
    width: 255px;

    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 40px -7px rgba(0, 0, 0, 0.35);
  }
  .toggle {
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
  .rotate {
    transform: rotate(180deg);
  }
  img.uncheck {
    display: none;
  }
  img.check {
    display: block;
  }
  @media (min-width: 768px) {
    ::placeholder,
    p {
      font-size: 15px;
    }
    h6 {
      font-size: 14px;
    }
  }
</style>
