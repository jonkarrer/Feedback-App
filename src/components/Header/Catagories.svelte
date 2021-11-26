<menu>
  <span>All</span>
  <span>UI</span>
  <span>UX</span>
  <span>Enhancement</span>
  <span>Bug</span>
  <span>Feature</span>
</menu>

<style>
  menu {
    display: flex;
    flex-wrap: wrap;

    width: 223px;
    height: 178px;
    padding: 24px 0px;
    padding-left: 24px;

    background: white;
    border-radius: 10px;
  }

  span {
    display: flex;
    align-items: center;

    border-radius: 10px;
    background: var(--grey);

    color: var(--blue);
    font-size: 13px;
    font-weight: 600;

    height: 30px;
    padding: 0 17px;
    margin-right: 10px;
  }
  span:hover {
    cursor: pointer;
    background: #cfd7ff;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    menu {
      width: 100%;
      height: 166px;
    }
  }
</style>
