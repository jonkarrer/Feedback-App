<script lang="ts">
  import { pop, push } from "svelte-spa-router";
  import type { IFeedback } from "../../utils/interfaces";
  import { feedback } from "../../utils/store";
  import {
    Category,
    Status,
    Title,
    Detail,
    GoBack,
  } from "../components/Edit/index";

  export let params: IFeedback;

  let request: IFeedback;
  let data: Array<IFeedback>;
  let editTitle: string,
    editCategory: string,
    editStatus: string,
    editDetail: string;

  $: {
    data = $feedback;
    request = data.filter((item) => item.id == params.id).pop();
  }

  function handleSave() {
    //Upsert new user data to firebase;
    console.log(editTitle, editCategory, editStatus, editDetail);
  }
  function handleDelete() {
    //Delete data from firebase
    push("/");
  }
</script>

<main>
  <div class="container">
    {#if request}
      <GoBack />
      <section>
        <img
          src="./assets/shared/icon-edit-feedback.svg"
          alt="edit feedback icon"
        />
        <h1>Editing '{request.title}'</h1>

        <Title bind:editTitle title={request.title} />
        <Category bind:editCategory category={request.category} />
        <Status bind:editStatus status={request.status} />
        <Detail bind:editDetail description={request.description} />

        <div class="button-wrapper">
          <button class="pink" on:click={handleSave}>Save Changes</button>
          <button class="navy" on:click={() => pop()}>Cancel</button>
          <button class="red" on:click={handleDelete}>Delete</button>
        </div>
      </section>
    {:else}
      <h1>loading</h1>
    {/if}
  </div>
</main>

<style>
  main {
    padding: 34px 24px;
  }
  .container {
    max-width: 540px;
    margin: auto;
  }
  section {
    position: relative;
    display: grid;
    gap: 24px;

    padding: 24px;
    padding-top: 44px;
    margin: auto;
    margin-top: 55px;

    background: white;
    border-radius: 10px;
  }
  img {
    position: absolute;
    top: 0;
    left: 24px;

    width: 40px;
    height: 40px;
    transform: translateY(-50%);
  }
  button {
    --w: 100%;
  }
  .button-wrapper {
    display: grid;
    gap: 16px;
  }

  /*Md*/
  @media (min-width: 768px) {
    section {
      margin-top: 75px;
    }
    img {
      width: 56px;
      height: 56px;
    }
    .button-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 0px;

      width: 100%;
    }
    button.red {
      width: 93px;
      order: 1;
    }
    button.navy {
      width: 93px;
      order: 2;

      margin-left: 130px;
    }
    button.pink {
      width: 144px;
      order: 3;
    }
    h1 {
      margin-top: 10px;
      margin-bottom: 26px;
    }
  }
</style>
