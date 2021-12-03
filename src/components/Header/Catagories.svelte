<script>
  import { filter } from "../../../utils/filterStore";
</script>

<menu>
  <span
    on:click={() => filter.set("all")}
    style={$filter === "all" ? "background: #4661E6; color: white" : ""}
    >All</span
  >
  <span
    on:click={() => filter.set("ui")}
    style={$filter === "ui" ? "background: #4661E6; color: white" : ""}>UI</span
  >
  <span
    on:click={() => filter.set("ux")}
    style={$filter === "ux" ? "background: #4661E6; color: white" : ""}>UX</span
  >
  <span
    on:click={() => filter.set("enhancement")}
    style={$filter === "enhancement" ? "background: #4661E6; color: white" : ""}
    >Enhancement</span
  >
  <span
    on:click={() => filter.set("bug")}
    style={$filter === "bug" ? "background: #4661E6; color: white" : ""}
    >Bug</span
  >
  <span
    on:click={() => filter.set("feature")}
    style={$filter === "feature" ? "background: #4661E6; color: white" : ""}
    >Feature</span
  >
</menu>

<style>
  menu {
    display: flex;
    flex-wrap: wrap;

    width: 223px;
    height: 178px;
    padding: 24px 0px;
    padding-left: 24px;

    background: white;
    border-radius: 10px;
  }

  span {
    display: flex;
    align-items: center;

    border-radius: 10px;
    background: var(--grey);

    color: var(--blue);
    font-size: 13px;
    font-weight: 600;

    height: 30px;
    padding: 0 17px;
    margin-right: 10px;
  }
  span:hover {
    cursor: pointer;
    background: #cfd7ff;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    menu {
      width: 100%;
      height: 166px;
    }
  }
</style>
