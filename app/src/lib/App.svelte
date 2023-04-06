<script>
  import { Router } from 'svelte-router-spa';
  import Navigation from './Navigation.svelte';
  import Body from './Body.svelte';
  import Home from './Home.svelte';
  import Resume from './Resume.svelte';
  import FullResume from './FullResume.svelte';

  const routes = [
    {
      name: '/',
      component: Home,
    },
    {
      name: '/resume',
      component: Resume,
    },
    {
      name: '/full-resume',
      component: FullResume,
    },
  ];
</script>

<div class="App">
  <Navigation />
  <Body>
    <Router {routes} />
  </Body>
</div>


<style>
  .App {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    padding: 2em;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .App {
      text-align: left;
      padding: 4em;
    }
  }

  @media (min-width: 1280px) {
    .App {
      flex-direction: row;
    }
  }
</style>
