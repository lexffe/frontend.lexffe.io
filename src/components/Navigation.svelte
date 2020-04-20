<template>

  <nav>
    <button class="menuToggle" on:click={toggleMenu}><ion-icon name="menu" /></button>
    <ul class:show>
      {#each links as l}
        <li><a href={l.href} use:link use:active>{l.label}</a></li>
      {/each}
      <li class='e'><a href='https://lexffe.xyz'>lexffe.xyz</a></li>
    </ul>
  </nav>

</template>

<style lang="scss">

$nav-bg: #fafafa;
$nav-sel-color: #e0e0e0;
$nav-sel-height: 2em;

@media screen and (min-width: 0px) {
  nav {
    background-color: $nav-bg;

    button.menuToggle {
      width: 100%;
      border: 0;
      background-color: inherit;

      padding: 0;
      
      ion-icon {
        font-size: 1.75em;
      }

    }

    button.menuToggle:hover {
      background-color: $nav-sel-color;
    }

    ul {
      list-style-type: none;
      display: none;
      padding: 0;
      margin: 0;

      li, li.e {

        line-height: $nav-sel-height;

        * {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          padding-left: calc(1em + 1vw);
        }

      }

      li:hover {
        background-color: $nav-sel-color;
      }

    }

    ul.show {
      display: block;
    }
    
  }
}

@media screen and (min-width: 768px) {
  nav {
    background-color: unset;
    margin: 2em;

    button.menuToggle {
      display: none;
    }

    ul, ul.show {

      display: inline-block;
      
      li, li.e {
        float: left;
        margin-right: calc(1em + 1.5vw);

        a {
          text-decoration: none;
          padding-left: unset;
        }

        a:hover {
          color: #B177A8;
        }
      }

      li:hover {
        background-color: unset;
      }

    }

  }
}

</style>

<script>

  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import { baseLinks } from '../routes';

  let show = false;
  const toggleMenu = () => ( show = !show );

  const links = [
    { href: '/', label: 'Home' }, 
    ...baseLinks,
  ];

</script>

