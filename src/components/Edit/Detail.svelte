<script>
  export let description;
  export let editDetail = description;
</script>

<div>
  <h6>Feedback Detail</h6>
  <p>Include any specific comments on what should be improved, added, etc.</p>
  <textarea
    on:change={(e) => (editDetail = e.currentTarget.value)}
    value={description}
    cols="30"
    rows="10"
  />
</div>

<style>
  h6 {
    font-weight: bold;
    line-height: 1.8;
  }
  p,
  h6,
  textarea,
  ::placeholder {
    font-size: 13px;
    color: #3a4374;
    font-family: Jost, sans-serif;
  }

  textarea {
    height: 120px;
    width: 100%;
    padding: 15px 16px;
    margin-top: 16px;

    border: none;
    border-radius: 10px;
    background: #f7f8fd;
  }

  @media (min-width: 768px) {
    ::placeholder,
    p,
    textarea {
      font-size: 15px;
    }
    h6 {
      font-size: 14px;
    }
  }
</style>
