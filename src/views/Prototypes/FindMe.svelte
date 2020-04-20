<style lang="scss">
.grid {
  
  transform: translateY(0%);

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;

  align-items: center;
  justify-items: center;

  .grid-el {
    // float: left;
    a {
      margin: calc(1em + 1vw);
      
      span {
        text-align: center;
        font-size: 2em;
      }
    }
  }

  .medium {
    grid-row: 2;
  }

  .title {
    grid-column: 2;
  }

}
</style>

<template>

<div class="grid">

  <div class="title">
    <h2>Looking for me?</h2>
  </div>

  {#each contactLinks as medium}
    <div class="grid-el medium">
      <a href={medium.href} class="{medium.href === '' ? 'disabled' : ''}"><span class="{medium.icon}" /></a>
    </div>
  {/each}

</div>

</template>

<script>
const contactLinks  = [
  { href: 'https://twitter.com/lexffe', icon: 'fab fa-twitter' },
  { href: 'mailto:lexffe@protonmail.ch', icon: 'fas fa-envelope' },
  { href: '', icon: 'fab fa-linkedin' },
];
</script>
