<script>
  export let title;
</script>

<div>
  <h6>{title}</h6>
  <p>Add a short, descriptive headline</p>
  <input
    on:change={(e) => (title = e.target.value)}
    value={title}
    type="text"
  />
</div>

<style>
  input {
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
  ::placeholder,
  input {
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
