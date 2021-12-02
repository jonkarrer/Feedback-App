<script lang="ts">
  import { pop } from "svelte-spa-router";
  import type { IFeedback } from "../../utils/interfaces";
  import { Category, Title, Detail, GoBack } from "../components/Edit/index";

  let data: Array<IFeedback>;
  let editTitle: string, editCategory: string, editDetail: string;

  function handleSave() {
    //Create new user data to firebase;
    console.log(editTitle, editCategory, editDetail);
    pop();
  }
</script>

<main>
  <div class="container">
    <GoBack />
    <section>
      <img
        src="./assets/shared/icon-edit-feedback.svg"
        alt="edit feedback icon"
      />
      <h1>Create New Feedback</h1>

      <Title bind:editTitle title="" />
      <Category bind:editCategory category="Feature" />
      <Detail bind:editDetail description="" />

      <div class="button-wrapper">
        <button class="pink" on:click={handleSave}>Add Feedback</button>
        <button class="navy" on:click={() => pop()}>Cancel</button>
      </div>
    </section>
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
      justify-content: flex-end;
      gap: 0px;

      width: 100%;
    }
    button.navy {
      width: 93px;
      order: 1;
      margin-right: 16px;
    }
    button.pink {
      width: 144px;
      order: 2;
    }
    h1 {
      margin-top: 10px;
      margin-bottom: 26px;
    }
  }
</style>
