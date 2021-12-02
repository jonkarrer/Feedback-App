<script>
  import AddFeedback from "../components/Shared/AddFeedback.svelte";
  import GoBack from "../components/Shared/GoBack.svelte";
  import Items from "../components/Roadmap/Items.svelte";
  let planned = false;
  let progress = true;
  let live = false;
  let status = "in-progress";

  function changeStyles(target) {
    if (target === "planned") {
      planned = true;
      progress = false;
      live = false;
    } else if (target === "in-progress") {
      planned = false;
      progress = true;
      live = false;
    } else {
      planned = false;
      progress = false;
      live = true;
    }
  }

  function handleCatagoryChange(e) {
    let target = e.currentTarget.id;
    changeStyles(target);
    status = target;
  }
</script>

<main>
  <header>
    <span>
      <GoBack textColor="white" iconColor="#ffffff" />
      <h1>Roadmap</h1>
    </span>
    <AddFeedback />
  </header>
  <span class="cata-wrapper">
    <h6 id="planned" class:planned on:click={(e) => handleCatagoryChange(e)}>
      Planned (2)
    </h6>
    <h6
      id="in-progress"
      class:progress
      on:click={(e) => handleCatagoryChange(e)}
    >
      In-Progress (3)
    </h6>
    <h6 id="live" class:live on:click={(e) => handleCatagoryChange(e)}>
      Live (1)
    </h6>
  </span>
  <section>
    <Items bind:status />
  </section>
</main>

<style>
  main {
    max-width: 1110px;
    margin: auto;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px;

    background: #373f68;
  }
  h1 {
    color: white;
    font-size: 18px;
  }
  .cata-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    height: 60px;

    border: rgba(0, 0, 0, 0.1) solid 1px;
  }
  .cata-wrapper h6 {
    width: 125px;

    font-size: 13px;
    font-weight: bold;
    color: rgba(58, 67, 116, 0.4);
  }
  h6.planned,
  h6.progress,
  h6.live {
    color: #373f68;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .planned {
    border-bottom: var(--orange) solid 5px;
  }
  .progress {
    border-bottom: var(--pink) solid 5px;
  }
  .live {
    border-bottom: var(--lt-blue) solid 5px;
  }
  section {
    padding: 24px;
  }
</style>
