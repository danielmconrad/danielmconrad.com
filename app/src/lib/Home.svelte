<script>
  import Navigation from './Navigation.svelte';
</script>

<Navigation />

<p>Home Page (latest)</p>

<!-- <style>
  @keyframes :local(fadeInHeader) {
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

  :local .Header :local {
    padding: 2em 0 5em;
    text-align: center;
    animation: fadeInHeader 1s;
  }

  @keyframes :local(fadeInNav) {
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

  :local .nav :local {
    animation: fadeInNav 2s;
  }

  :local .navList {
    margin: 5em 0 0;
    padding: 0;
    list-style-type: none;
  }

  :local .navList li {
    margin: 0;
    padding: 0;
    display: block;
  }

  :local .navList a {
    padding: 1em 0.5em 1em 0;
    display: block;
  }

  :local .icon {
    margin-right: 0.5em;
  }


  /*
    BREAKPOINT: Phablet
  */
  @media (min-width: 580px) {
    :local .Header {
      padding: 0 0 5em;
      text-align: left;
    }

    :local .nav li {
      display: inline-block;
      padding-right: 2em;
    }
  }

  /*
    BREAKPOINT: Desktop
  */
  @media (min-width: 1280px) {
    :local .Header {
      flex: 1;
      padding: 0 1em 0 0;
    }

    :local .nav li {
      display: block;
    }
  }
</style> -->
