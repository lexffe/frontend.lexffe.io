<svelte:head>
  <title>About me - lexffe.io</title>
</svelte:head>

<template>
  <section in:fade={{ duration: 200 }}>
    {#await fetchCV()}
      <Spinner />
    {:then doc}
      <p>Last Updated: {doc.lastUpdatedTime}</p>
      <div>{@html doc.html}</div>
    {:catch error}
      <p>We could not serve you this page right now.</p>
      <p class="small">{error.message}</p>
    {/await}
  </section>
</template>

<style lang="scss">

* {
  line-height: 1.5em;
}

p.small {
  font-size: small;
  font-weight: 200;
}

</style>

<script>

import { format, parse } from 'fecha';
import { fade } from 'svelte/transition';
import Spinner from '../components/Spinner.svelte';
import { baseURL } from '../helpers/baseURL';

const fetchCV = () => fetch(`${baseURL}/cv/`)
  .then((res) => {
    if (!res.ok) throw new Error('could not get document')
    return res.json();
  })
  .then((data) => data[0])
  .then((doc) => {
    const parsed = doc;
    console.log(parsed);
    parsed.lastUpdatedTime = format(parse(doc.last_updated, 'YYYY-MM-DDTHH:mm:ss.SSSZ'), 'isoDate');
    return parsed;
  });

</script>
