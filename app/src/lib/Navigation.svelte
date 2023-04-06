<script>
  import { routeIsActive } from 'svelte-router-spa';
</script>

<header class="Navigation">
  <h1>Daniel M Conrad</h1>
  <h2>Technology Leader</h2>

  <nav class="nav">
    <ul class="navList">
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
        <a href="/resume">
          <ins>printable</ins> <strong>resume</strong>
        </a>
      </li>
      <li>
        <a href="/full-resume">
          <ins>full</ins> <strong>resume</strong>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  @keyframes fadeInHeader {
    0% {
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .Navigation {
    padding: 2em 0 5em;
    text-align: center;
    animation: fadeInHeader 1s;
  }

  @keyframes fadeInNav {
    0% {
      opacity: 0;
      transform: translate3d(4em, 0, 0);
    }

    50% {
      opacity: 0;
      transform: translate3d(4em, 0, 0);
    }

    100% {
      transform: none;
      opacity: 1;
    }
  }

  .nav {
    animation: fadeInNav 2s;
  }

  .navList {
    margin: 5em 0 0;
    padding: 0;
    list-style-type: none;
  }

  .navList li {
    margin: 0;
    padding: 0;
    display: block;
  }

  .navList a {
    padding: 1em 0.5em 1em 0;
    display: block;
  }

  .icon {
    margin-right: 0.5em;
  }

  @media (min-width: 580px) {
    .Navigation {
      padding: 0 0 5em;
      text-align: left;
    }

    .navList li {
      display: inline-block;
      padding-right: 2em;
    }
  }

  @media (min-width: 1280px) {
    .Navigation {
      flex: 1;
      padding: 0 1em 0 0;
    }

    .navList li {
      display: block;
    }
  }
</style>
