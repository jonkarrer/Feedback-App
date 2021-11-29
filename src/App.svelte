<script lang="ts">
  import { feedback } from "../utils/store";
  import Router from "svelte-spa-router";
  import Home from "./pages/index.svelte";
  import Request from "./pages/Request.svelte";
  import Edit from "./pages/Edit.svelte";

  $: console.log($feedback);
</script>

<Router
  routes={{
    "/": Home,
    "/request/:id": Request,
    "/edit/:id": Edit,
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
