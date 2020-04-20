<script>

import { link } from 'svelte-spa-router';

export let name;
export let description;
export let reference_source;
// export let reference_type;
export let external

export let collection;
export let internal_id;
export let url;

</script>

<style>
.source {
  color: #A0A0A0;
}
</style>

<template>
  <div>
    <h2>
      {#if external === true}
        <a href={url}><span class="source">{reference_source}: </span>{name}</a>
      {:else}
        <a href="{collection}/{internal_id}?doc_id=true" use:link><span class="source">{reference_source}: </span>{name}</a>
      {/if}
    </h2>
    <p>{description}</p>
  </div>
</template>
