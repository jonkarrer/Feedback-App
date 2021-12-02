<script lang="ts">
  import { feedback } from "../utils/store";
  import Router from "svelte-spa-router";
  import { Home, Request, Edit, AddFeedback, Roadmap } from "./pages/index";

  $: console.log($feedback);
</script>

<Router
  routes={{
    "/": Home,
    "/request/:id": Request,
    "/edit/:id": Edit,
    "/addfeedback": AddFeedback,
    "/roadmap": Roadmap,
  }}
/>

<style>
  /*Md*/
  @media (min-width: 768px) {
  }
  /*Lg*/
  @media (min-width: 1024px) {
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2Xl*/
  @media (min-width: 1440px) {
  }
</style>
