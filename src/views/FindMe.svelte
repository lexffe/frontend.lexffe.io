<template>
  <div class="flex-container" in:fade={{ duration: 200 }}>
    <div>
      <h2>Looking for me?</h2>
    </div>
    <div class="medium">
      {#each contactLinks as medium}
        <a href={medium.href} class="{medium.href === '' ? 'disabled' : ''}"><ion-icon name={medium.icon} /></a>
      {/each}
    </div>
    <br />
    <div>
      <p>You might want to check out my personal website for contents other than programming and computer stuff. :)</p>
    </div>
  </div>
</template>

<style lang="scss">

.flex-container {
  transform: translateY(25%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  // align-content: center;
}

h2, p{
  line-height: 2em;
  text-align: center;
}

.medium {
  display: block;

  a {
    margin: calc(1em + 1vw);
    
    ion-icon {
      text-align: center;
      font-size: 2em;
    }
  }

  a.disabled {
    pointer-events: none;
    * {
      color: #f0f0f0;
    }
  }
}

</style>

<script>

import { fade } from 'svelte/transition';

const contactLinks  = [
  { href: 'https://twitter.com/lexffe', icon: 'logo-twitter' },
  { href: 'mailto:lexffe@protonmail.ch', icon: 'mail' },
  { href: '', icon: 'logo-linkedin' },
];

</script>
