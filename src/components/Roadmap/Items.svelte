<script lang="ts">
  import { feedback } from "../../../utils/store";
  import type { IFeedback } from "../../../utils/interfaces";
  import Feedback from "../Home/Feedback.svelte";

  export let status: string;

  let subtext: string;
  let headtext: string;
  let description: string;

  let data: Array<IFeedback>;

  $: {
    data = $feedback.filter((item) => item.status === status);
  }
  $: if (status === "planned") {
    subtext = "Planned";
    headtext = subtext;
    description = "Ideas prioritized for research";
  } else if (status === "live") {
    subtext = "Live";
    headtext = subtext;
    description = "Released features";
  } else {
    subtext = "In Progress";
    headtext = "In-Progress";
    description = "Currently being developed";
  }
</script>

<h1>{headtext}</h1>
<p>{description}</p>
<section>
  {#if data}
    {#each data as request}
      <div id={status} class="card">
        <span
          ><img
            src={status === "live"
              ? "./assets/blu_dot.svg"
              : status === "planned"
              ? "./assets/orng_dot.svg"
              : "./assets/pink_dot.svg"}
            alt="blue dot icon"
          />
          <p>{subtext}</p>
        </span>
        <Feedback data={request} />
      </div>
    {/each}
  {/if}
</section>

<style>
  section {
    padding: 24px 0;
  }
  span {
    display: flex;
    padding: 0 24px;
    padding-top: 16px;
  }
  span p {
    margin-left: 16px;
  }
  .card {
    --in-progress: "#ad1fea";
    --live: "red";
    --planned: "yellow";
    margin-top: 16px;
    background: white;

    border-radius: 10px;
    border-top-width: 7px;
    border-top-style: solid;
  }
  #live {
    border-top-color: #62bcfa;
  }
  #in-progress {
    border-top-color: var(--pink);
  }
  #planned {
    border-top-color: #f49f85;
  }
</style>
