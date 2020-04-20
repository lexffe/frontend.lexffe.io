<script>
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  export const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/cv', label: 'Résumé' },
    { href: '/find-me', label: 'Find Me' },
  ]
</script>


<style lang="scss">

a {
  text-decoration: none;
}

a:hover {
  color: #B177A8;
}

nav {
  text-align: center;
  ul {
    list-style-type: none;
    padding: 0;
    display: inline-block;

    li {
      float: left;
      margin-right: calc(1em + 1vw);
    }

    li.e {
      margin-right: unset;
    }

  }
}

</style>

<template>
  <nav>
    <ul>
      {#each links as l}
        <li><a href={l.href} use:link use:active>{l.label}</a></li>
      {/each}
      <li class='e'><a href='https://lexffe.xyz'>lexffe.xyz</a></li>
    </ul>
  </nav>
</template>