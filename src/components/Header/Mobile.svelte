<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import ActionBar from "../ActionBar/index.svelte";
  let isMenuOpen = true;

  function handleClick() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
</script>

<header>
  <Navbar open={isMenuOpen} />
  <div class="wrapper">
    <span data-test="header">
      <h6>Frontend Mentor</h6>
      <p>Feedback Board</p>
    </span>
    <span>
      <img
        on:click={handleClick}
        data-test="burger"
        src="./assets/shared/mobile/icon-hamburger.svg"
        alt="burger icon"
      />
    </span>
  </div>
  <ActionBar />
</header>

<style>
  header {
    width: 100%;
    position: fixed;
  }
  .wrapper {
    height: 72px;
    width: 100%;
    background: radial-gradient(
      128.88% 150.88% at 103.9% 1%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    );

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h6 {
    font-weight: bold;
    font-size: 15px;
    color: white;
  }
  p {
    font-weight: 500;
    font-size: 13px;
    color: var(--text-opacity-75);
  }

  /*Md*/
  @media (min-width: 768px) {
    header {
      display: none;
    }
  }
</style>
