<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { fade } from "svelte/transition";
  import { baseLinks } from "../routes";
</script>

<style src="./Home.scss">

</style>

<svelte:head>
  <title>this is lexffe.io</title>
  <meta
    name="description"
    content="a developer's blog made with a mindset from 2005." />
</svelte:head>

<template>
  <div class="grid" in:fade={{ duration: 500 }}>

    <div class="grid-el">
      <div class="content">
        <h1>this is lexffe.io</h1>
      </div>
    </div>

    <div class="grid-el">
      <div class="content">
        <p class="subtitle">
          <span>I write code,</span>
          <br />
          <span>and I write about me</span>
          <br />
          <span>writing code.</span>
        </p>
      </div>
    </div>

    <nav class="grid-el">
      <ul class="content">
        {#each baseLinks as l}
          <li>
            <a href={l.href} use:link>{l.label}</a>
          </li>
        {/each}
        <li class="e">
          <a href="https://lexffe.xyz">lexffe.xyz</a>
        </li>
      </ul>
    </nav>

  </div>
</template>
