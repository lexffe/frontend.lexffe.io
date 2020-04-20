<script>
  import { fade } from "svelte/transition";
  import Spinner from "../../components/Spinner.svelte";
  import Content from "./Content.svelte";
  import { baseURL } from "../../helpers/baseURL";
  import { parse } from 'qs';
  import { querystring } from "svelte-spa-router";
  export let params = {};

  const reqParams = new Request(`${baseURL}/posts/${params.slug}${ parse($querystring).obj_id === 'true' ? '?obj_id=true' : ''}`);

  const fetchPost = () =>
    fetch(reqParams).then(res => {
      if (!res.ok) throw new Error("could not get document");
      return res.json();
    });
</script>

<style>
  p.small {
    font-size: small;
    font-weight: 200;
  }
</style>

<template>

  {#await fetchPost()}
    <div in:fade={{ duration: 200 }}>
      <Spinner />
    </div>
  {:then doc}
    <div in:fade={{ duration: 200 }}>
      <Content {...doc} />
    </div>
  {:catch error}
    <p>Something went wrong.</p>
    <p class="small">{error.message}</p>
  {/await}

</template>
