<script lang="ts">
  import { feedback } from "../../../utils/store";
  import type { IFeedback } from "../../../utils/interfaces";
  import Feedback from "./Feedback.svelte";

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

<section>
  <h1>{headtext}</h1>
  <p class="description">{description}</p>
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
    padding-bottom: 24px;
  }
  span {
    display: flex;
    padding: 0 16px;
    padding-top: 16px;
  }
  span p {
    margin-left: 16px;
    color: #647196;
    font-size: 13px;
  }
  p.description {
    font-size: 14px;
    color: #647196;
  }
  .card {
    --in-progress: "#ad1fea";
    --live: "red";
    --planned: "yellow";
    margin-top: 24px;
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
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #3a4374;
  }
  @media (min-width: 768px) {
    .card {
      width: 223px;
      margin-top: 16px;
    }
    section {
      padding: 0;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    .card {
      width: 350px;
      height: 272px;
    }
    span p {
      font-size: 16px;
    }
  }
</style>
