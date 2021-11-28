<section>
  <h1>Add Comment</h1>
  <textarea placeholder="Type your comment here" rows="10" cols="25" />
  <span>
    <p>250 Characters left</p>
    <button class="pink">Post Comment</button>
  </span>
</section>

<style>
  section {
    padding: 24px;
    height: 234px;

    background: white;
    border-radius: 10px;
  }
  textarea {
    margin-top: 14px;
    padding: 16px;
    height: 80px;
    width: 100%;

    border: none;
    border-radius: 10px;

    background: #f7f8fd;
  }
  textarea::placeholder {
    color: #8c92b3;
    font-size: 13px;
    font-family: Jost, sans-serif;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 11px;
  }
  button {
    --w: 119px;
    --h: 40px;
    --font: 13px;
  }
  p {
    color: #647196;
    font-size: 13px;
  }
  h1 {
    font-size: 18px;
  }
</style>
