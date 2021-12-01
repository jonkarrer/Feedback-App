<script>
  export let status;
</script>

<div>
  <h6>Update Status</h6>
  <p>Change feature state</p>
  <div class="dropdown">
    <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
  </div>
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
  .dropdown:hover {
    cursor: pointer;
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
