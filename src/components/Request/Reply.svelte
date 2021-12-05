<script>
  export let reply;

  let openReply = false;
  function handleReply() {
    openReply = !openReply;
  }
</script>

<article>
  <span
    ><img src={reply.user.image} alt="user's profile" />
    <div class="title">
      <h6>{reply.user.name}</h6>
      <p>@{reply.user.username}</p>
    </div>
    <div on:click={handleReply} class="reply-button">Reply</div>
  </span>
  <p class="content"><b>{reply.replyingTo}</b> {reply.content}</p>
  <div class={openReply ? "make-reply" : "close-reply"}>
    <textarea cols="30" rows="10" />
    <button class="pink">Post Reply</button>
  </div>
</article>

<style>
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
  b {
    color: var(--pink);
  }
  .reply-button,
  h6,
  p {
    font-size: 13px;
  }
  .reply-button {
    font-weight: 600;
    color: #4661e6;
  }

  h6 {
    color: #3a4374;

    font-weight: bold;
  }
  p {
    color: #647196;
  }
  .content {
    margin-top: 16px;
  }
  .make-reply {
    display: grid;
    gap: 16px;
    margin-top: 16px;
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
      margin-right: 30px;
    }
    .content {
      margin-top: 0;
      margin-left: 74px;
    }
    button {
      margin-left: 16px;
    }
    .make-reply {
      display: flex;
      margin-left: 74px;
      margin-top: 16px;
    }
  }
</style>
