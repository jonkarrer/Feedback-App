<script>
  export let category;
</script>

<div>
  <h6>Catagory</h6>
  <p>Choose a category for your feedback</p>
  <div class="dropdown"><p>{category}</p></div>
</div>

<style>
  .dropdown {
    height: 48px;
    width: 100%;
    padding: 15px 16px;
    margin-top: 16px;

    border: none;
    border-radius: 10px;
    background: #f7f8fd;
  }
  h6 {
    font-weight: bold;
    line-height: 1.8;
  }
  p,
  h6,
  ::placeholder {
    font-size: 13px;
    color: #3a4374;
    font-family: Jost, sans-serif;
  }

  @media (min-width: 768px) {
    ::placeholder,
    p {
      font-size: 15px;
    }
    h6 {
      font-size: 14px;
    }
  }
</style>
