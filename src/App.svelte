<script>
  // importing Modules
  // @ts-nocheck
  import { Router, Route } from 'svelte-navigator';
  // importing components
  import Navbar from './lib/Navbar.svelte';
  // importing routes
  import Home from './routes/Home.svelte';
  import Game from './routes/Game.svelte'
  import Play from './routes/Play.svelte'
  import Learn from './routes/Learn.svelte'
</script>

  <Router>
    <Navbar />

    <Route path="/">
        <Home />
    </Route>
    <Route path="/game/*">
        <Game />
    </Route>
    <Route path="/play/*">
      <Play />
    </Route>
    <Route path="/learn/*">
      <Learn />
    </Route>
  </Router>
