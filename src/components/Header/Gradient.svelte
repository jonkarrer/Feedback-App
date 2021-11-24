<div>
  <span>
    <h6>Frontend Mentor</h6>
    <p>Feedback Board</p>
  </span>
</div>

<style>
  div {
    display: flex;
    align-items: flex-end;

    height: 178px;
    width: 223px;
    padding: 24px;

    background: url("../assets/suggestions/tablet/background-header.png");
    border-radius: 10px;
  }
  h6 {
    font-weight: bold;
    font-size: 15px;
    color: white;
  }
  p {
    font-weight: 500;
    font-size: 13px;
    color: var(--text-opacity-75);
  }
  /*Lg*/
  @media (min-width: 1024px) {
    div {
      height: 137px;
      width: 100%;
      background: center / cover
        url("../assets/suggestions/desktop/background-header.png");
    }
  }
</style>
