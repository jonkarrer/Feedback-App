<script lang="ts">
  import GoBack from "../components/Shared/GoBack.svelte";
  import type { IFeedback } from "../../utils/interfaces";
  import { feedback } from "../../utils/store";

  export let params: IFeedback;

  let request: IFeedback;
  let data: Array<IFeedback>;

  $: {
    data = $feedback;
    request = data.filter((item) => item.id == params.id).pop();
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

        <div class="input-wrapper">
          <h6>Feedback Title</h6>
          <p>Add a short, descriptive headline</p>
          <input placeholder="Add a dark theme option" type="text" />
        </div>
        <div class="input-wrapper">
          <h6>Catagory</h6>
          <p>Choose a category for your feedback</p>
          <div class="dropdown"><p>Feature</p></div>
        </div>
        <div class="input-wrapper">
          <h6>Update Status</h6>
          <p>Change feature state</p>
          <div class="dropdown"><p>Planned</p></div>
        </div>
        <div class="input-wrapper">
          <h6>Feedback Title</h6>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea value={request.description} cols="30" rows="10" />
        </div>
        <div class="button-wrapper">
          <button class="pink">Save Changes</button>
          <button class="navy">Cancel</button>
          <button class="red">Delete</button>
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
  img {
    position: absolute;
    top: 0;
    left: 24px;

    width: 40px;
    height: 40px;
    transform: translateY(-50%);
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
  h6 {
    color: #3a4374;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.8;
  }
  p {
    font-size: 13px;
    color: #647196;
  }
  input,
  .dropdown {
    height: 48px;
    width: 100%;
    padding: 15px 16px;
    margin-top: 16px;

    border: none;
    border-radius: 10px;
    background: #f7f8fd;
  }
  textarea {
    height: 120px;
    width: 100%;
    padding: 15px 16px;
    margin-top: 16px;

    border: none;
    border-radius: 10px;
    background: #f7f8fd;
  }
  ::placeholder,
  p,
  textarea {
    font-size: 13px;
    color: #3a4374;
    font-family: Jost, sans-serif;
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
    ::placeholder,
    p,
    textarea {
      font-size: 15px;
    }
    h6 {
      font-size: 14px;
    }
    h1 {
      margin-top: 10px;
      margin-bottom: 26px;
    }
  }
</style>
