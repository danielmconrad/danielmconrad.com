<script>
  import { Navigate } from 'svelte-router-spa';
</script>

<header>
  <h1>Daniel M Conrad</h1>
  <h2>Technology Leader</h2>

  <nav>
    <ul>
      <li>
        <a href="mailto:danielmconrad@gmail.com">
          <!-- <Icon type="google"  /> -->
          <strong>danielmconrad</strong><ins>@gmail.com</ins>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/danielmconrad/">
          <!-- <Icon type="linkedin"  /> -->
          <ins>linkedin.com/in/</ins><strong>danielmconrad</strong>
        </a>
      </li>
      <li>
        <a href="https://github.com/danielmconrad">
          <!-- <Icon type="github"  /> -->
          <ins>github.com/</ins><strong>danielmconrad</strong>
        </a>
      </li>
      <li>
        <Navigate to="/resume">
          <strong>resume</strong>
        </Navigate>
      </li>
      <li>
        <Navigate to="/cv">
          <strong>curriculum vitae</strong>
        </Navigate>
      </li>
    </ul>
  </nav>
</header>
