<script>
  import Navigation from "./components/Navigation.svelte";
  import Router, { location } from "svelte-spa-router";
  import { routes } from "./routes";
</script>

<style global lang="scss">
  $text-color: #707070;
  $link-hover: #b177a8;
  $data-source: #a0a0a0;
  $nav-here: #b0b0b0;

  * {
    font-family: source-serif-pro, serif;
    font-weight: 300;
    font-style: normal;
    color: $text-color;
    box-sizing: border-box;
    font-display: swap;
  }

  .container {
    margin: 2em;
  }

  footer {
    * {
      font-size: small;
      font-weight: 200;
      position: fixed;
      bottom: 0em;
    }

    p.path {
      right: 1em;
    }

    p.copyright {
      left: 1em;
    }
  }

  a {
    text-decoration: none;
  }

  a.active {
    color: $nav-here;
    pointer-events: none;
  }
</style>

<svelte:head>
  <meta name="twitter:site" content="@lexffe" />
  <meta name="twitter:creator" content="@lexffe" />
  <meta property="og:url" content="https://lexffe.io" />
  <meta property="og:site_name" content="this is lexffe.io" />
</svelte:head>

<template>
  {#if $location !== '/'}
    <Navigation />
  {/if}
  <div class="container">
    <Router {routes} />
  </div>

  <footer>
    <p class="copyright">&copy; 2020 lexffe.io All Rights Reserved.</p>
    <p class="path">{$location}</p>
  </footer>
</template>
