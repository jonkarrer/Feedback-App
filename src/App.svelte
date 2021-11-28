<script lang="ts">
  import { onMount } from "svelte";
  import { feedback } from "../utils/store";
  import Router from "svelte-spa-router";
  import Home from "./index.svelte";
  import Request from "./Request.svelte";

  $: console.log($feedback);
</script>

<Router
  routes={{
    "/": Home,
    "/request/:id": Request,
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
