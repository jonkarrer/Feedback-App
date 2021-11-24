<script lang="ts">
  import Router, { location, link } from "svelte-spa-router";
  import Home from "./index.svelte";
  import database from "../utils/firebaseClient";

  import { ref, child, get } from "firebase/database";

  //Read Data
  const dbRef = ref(database);
  get(child(dbRef, `productRequests/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
</script>

<Router
  routes={{
    "/": Home,
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
