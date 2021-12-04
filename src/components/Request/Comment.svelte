<script>
  import Replies from "./Replies.svelte";

  export let c;

  let openReply = false;
  function handleReply() {
    openReply = !openReply;
  }
</script>

<article>
  <span
    ><img src={c.user.image} alt="user's profile" />
    <div class="title">
      <h6>{c.user.name}</h6>
      <p>@{c.user.username}</p>
    </div>
    <div on:click={handleReply} class="reply-button">Reply</div>
  </span>
  <p class="content">{c.content}</p>
  <div class={openReply ? "make-reply" : "close-reply"}>
    <textarea cols="30" rows="10" />
    <button class="pink">Post Reply</button>
  </div>
  <Replies replies={c.replies} />
</article>

<style>
  article {
    border-bottom: rgba(0, 0, 0, 0.05) 1px solid;
    padding: 24px 0;
  }
  article:last-child {
    border: none;
    padding-top: 24px;
    padding-bottom: 0;
  }
  span {
    display: flex;
  }
  img {
    width: 40px;
    border-radius: 100%;
    margin-right: 16px;
  }
  .title {
    flex-grow: 1;
  }

  .reply-button,
  h6,
  p {
    font-size: 13px;
  }
  h6 {
    color: #3a4374;

    font-weight: bold;
  }
  p {
    color: #647196;
  }
  .reply-button {
    font-weight: 600;
    color: #4661e6;
  }
  .content {
    margin-top: 16px;
  }
  .make-reply {
    display: grid;
    margin-top: 16px;
    gap: 16px;
  }
  .close-reply {
    display: none;
  }
  textarea {
    height: 80px;
    flex: 1;
    border-radius: 10px;
    padding: 16px;
    font-family: Jost, sans-serif;
    border: #4661e6 solid 1px;
  }
  button {
    --w: 117px;
    --h: 44px;
  }
  /*Md*/
  @media (min-width: 768px) {
    img {
      width: 40px;
      border-radius: 100%;
      margin-right: 32px;
    }
    .make-reply {
      display: flex;
      gap: 0;
      margin-left: 74px;
      margin-top: 16px;
    }
    button {
      margin-left: 16px;
    }
    .content {
      margin-left: 74px;
    }
  }
</style>
