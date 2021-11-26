<script lang="ts">
  import type { IFeedback } from "../../../utils/interfaces";

  export let data: IFeedback;

  let comments = data.comments === undefined ? "0" : data.comments.length;
</script>

<article data-key={data.id}>
  <h3>{data.title}</h3>
  <p>{data.description}</p>
  <span>{data.category.charAt(0).toUpperCase() + data.category.slice(1)}</span>
  <span
    ><img
      src="./assets/shared/icon-arrow-up.svg"
      alt="up arrow"
    />{data.upvotes}</span
  >
  <span
    ><img
      src="./assets/shared/icon-comments.svg"
      alt="up arrow"
    />{comments}</span
  >
</article>

<style>
  article {
    display: grid;
    grid: auto / 1fr 1fr;

    padding: 22px;

    gap: 9px;
    height: 200px;

    background: white;
    border-radius: 10px;
  }
  h3,
  p {
    grid-column: 1 / span 2;
  }
  h3 {
    color: #3a4374;
    font-size: 13px;
    font-weight: bold;

    height: 19px;
  }
  p {
    font-size: 13px;
  }
  span {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 5px;

    border-radius: 10px;
    background: var(--grey);

    font-size: 13px;
    font-weight: bold;

    width: max-content;
    height: 30px;
    padding: 5px 16px;
  }
  article span:nth-child(3) {
    grid-column: 1 / span 2;

    color: var(--blue);
    font-weight: 600;
  }

  article span:nth-child(5) {
    justify-self: end;
  }
</style>
