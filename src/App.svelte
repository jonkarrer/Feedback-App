<script lang="ts">
  import MobileHeader from "./components/Header/Mobile.svelte";
  import Router, { location, link } from "svelte-spa-router";
  import Home from "./index.svelte";
  import Request from "./Request.svelte";
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
