<script>
</script>

<div class="body">
  <slot></slot>
</div>

<style>
  @keyframes fadeInBody {
    0%   { opacity: 0; }
    66%  { opacity: 0; }
    100% { opacity: 1; }
  }

  .body {
    animation: fadeInBody 3s;
  }

  @media (min-width: 1280px) {
    .body {
      flex: 2;
      padding: 1em 0 0 7em;
      border-left: 1px solid #ddd;
    }
  }
</style>
