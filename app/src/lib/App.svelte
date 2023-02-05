<script>
  import { Router } from 'svelte-router-spa';
  import Home from './Home.svelte';
  import Resume from './Resume.svelte';
  import Cv from './Cv.svelte';

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
      name: '/cv',
      component: Cv,
    },
  ];
</script>

<Router {routes} />
