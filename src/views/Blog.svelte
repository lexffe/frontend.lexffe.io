<script>
  import { fade } from "svelte/transition";
  import Spinner from "../components/Spinner.svelte";
  import { baseURL } from "../helpers/baseURL";
  import BlogPostEntry from "../components/BlogPostEntry.svelte";

  const reqParams = new Request(`${baseURL}/posts/?simple=true`);

  const fetchBlogEntries = () =>
    fetch(reqParams).then(res => {
      if (!res.ok) throw new Error("could not get document");
      return res.json();
    }); // data
</script>

<style lang="scss">
  p.small {
    font-size: small;
    font-weight: 200;
  }

  .entries-container {
    display: grid;
    align-items: center;
    justify-items: center;

    .entries {
      float: left;
      border-left: 1px black;
    }
  }

  @media screen and (min-width: 0px) {
    .entries-container {
      width: unset;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (min-width: 768px) {
    .entries-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .entries-container {
      width: 90%;
    }
  }
</style>

<template>
  <section in:fade={{ duration: 200 }}>
    {#await fetchBlogEntries()}
      <Spinner />
    {:then docs}

      {#if docs.length === 0}
        <p>It seems like this page is currently empty.</p>
        <p>Check back later.</p>
      {:else}
        <div class="entries-container">
          {#each docs as doc}
            <div class="entries">
              <BlogPostEntry {...doc} />
            </div>
          {/each}
        </div>
      {/if}

    {:catch error}
      <p>We could not serve you this page right now.</p>
      <p class="small">{error.message}</p>
    {/await}
  </section>
</template>
