<script lang="ts">
  import type { IFeedback } from "../../../utils/interfaces";

  export let data: IFeedback;

  let comments = data.comments === undefined ? "0" : data.comments.length;
  let catagory = data.category.charAt(0).toUpperCase() + data.category.slice(1);
</script>

<article data-key={data.id}>
  <div class="content">
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <div class="category">{catagory}</div>
  </div>
  <span class="upvotes"
    ><img
      src="./assets/shared/icon-arrow-up.svg"
      alt="icon up arrow"
    />{data.upvotes}</span
  >
  <span class="comments"
    ><img
      src="./assets/shared/icon-comments.svg"
      alt="icon comments"
    />{comments}</span
  >
</article>

<style>
  article {
    display: grid;
    grid: auto / 1fr 1fr;

    padding: 24px;

    gap: 9px;
    height: 200px;

    background: white;
    border-radius: 10px;
  }
  .content {
    display: grid;

    grid-column: 1 / span 2;
  }
  h3 {
    color: #3a4374;
    font-size: 13px;
    font-weight: bold;
  }
  p {
    font-size: 13px;
    color: #647196;
  }
  .category,
  .upvotes,
  .comments {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 8px;

    font-size: 13px;
    font-weight: bold;

    width: max-content;
    height: 30px;
    padding: 5px 16px;
  }
  .category {
    color: var(--blue);
    font-weight: 600;

    border-radius: 10px;
    background: var(--grey);
    margin-top: 4px;
  }
  .upvotes {
    border-radius: 10px;
    background: var(--grey);
  }
  .comments {
    justify-self: end;
  }

  /*Md*/
  @media (min-width: 768px) {
    article {
      display: flex;

      padding: 22px;

      gap: 9px;
      height: 151px;

      background: white;
      border-radius: 10px;
    }
    .content {
      order: 2;
      flex-grow: 1;
      padding-left: 40px;
    }
    .upvotes {
      order: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 53px;
      width: 40px;
    }
    .comments {
      order: 3;
      align-self: center;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
  }
</style>
