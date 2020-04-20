<script>
  import timeParser from "../helpers/timeParser";
  import { format, parse } from "fecha";
  import { link } from "svelte-spa-router";

  export let _id;
  export let title;
  export let subtitle;
  export let last_updated;
  export let updated;

  const createdISO = format(timeParser(_id), "isoDate");
  const lastUpdatedISO = format(
    parse(last_updated, "YYYY-MM-DDTHH:mm:ss.SSSZ"),
    "isoDate"
  );
</script>

<style lang="scss">
  .created {
    font-size: small;
    font-weight: 200;
  }

  a {
    text-decoration: none;
  }
</style>

<template>
  <div>
    <h2>
      <a href="/posts/{_id}?obj_id=true" use:link>{title}</a>
    </h2>
    <p>{subtitle}</p>
    <p>
      <time datetime={lastUpdatedISO}>{lastUpdatedISO}</time>
      {#if updated}
        <span class="created">
          Created:
          <time datetime={createdISO}>{createdISO}</time>
        </span>
      {/if}
    </p>
  </div>
</template>
