<menu>
  <div class="title">
    <h6>Roadmap</h6>
    <a href="/">View</a>
  </div>

  <div class="groups">
    <span>
      <img src="./assets/orng_dot.svg" alt="orange dot" />
      <p>Planned</p>
      <b>2</b>
    </span>
    <span>
      <img src="./assets/pink_dot.svg" alt="pink dot" />
      <p>In-Progress</p>
      <b>3</b>
    </span>
    <span>
      <img src="./assets/blu_dot.svg" alt="blue dot" />
      <p>Live</p>
      <b>1</b>
    </span>
  </div>
</menu>

<style>
  menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 223px;
    height: 178px;
    padding: 24px;
    margin-top: 24px;

    background: white;
    border-radius: 10px;
  }
  h6 {
    font-size: 18px;
    font-weight: bold;
    color: var(--lt-navy);
  }
  a {
    text-decoration: underline;
    color: var(--blue);
  }
  p,
  b {
    font-size: 16px;
    color: #647196;
  }
  span {
    display: grid;
    gap: 17px;
    grid: auto-flow / auto auto 1fr;
    align-items: center;
    justify-items: flex-end;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .groups {
    display: grid;
    gap: 8px;
  }
  a:hover {
    color: #8397f8;
  }
  /*Md*/
  @media (min-width: 768px) {
    menu {
      margin-top: 0;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    menu {
      width: 100%;
      height: 178px;
    }
  }
</style>
