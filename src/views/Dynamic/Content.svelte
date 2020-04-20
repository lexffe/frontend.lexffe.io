<script>
  import { format, parse } from "fecha";
  import timeParser from "../../helpers/timeParser";

  export let _id;
  export let title;
  export let subtitle;
  export let searchable_title;
  export let tags;
  export let html;
  export let last_updated;
  export let updated;

  const createdISO = format(timeParser(_id), "isoDate");
  const lastUpdatedISO = format(
    parse(last_updated, "YYYY-MM-DDTHH:mm:ss.SSSZ"),
    "isoDate"
  );

  window.history.replaceState(null, "", `#/posts/${searchable_title}`);
</script>

<style lang="scss">
  .created {
    font-size: small;
    font-weight: 200;
  }

  section.document {
    margin: 3em 0;
  }

  @media screen and (min-width: 1024px) {
    header {
      * {
        display: inline;
      }

      p.subtitle {
        padding-left: 1em;
      }

      p.date {
        float: right;
      }
    }
  }
</style>

<svelte:head>

  <title>{title} - lexffe.io</title>
  <meta name="description" content={subtitle} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@lexffe" />
  <meta name="twitter:title" content={title} />
  <meta
    name="twitter:description"
    content={subtitle} />
  <meta name="twitter:creator" content="@lexffe" />

  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={subtitle} />
  <meta property="og:site_name" content="lexffe.io" />
  <meta property="article:published_time" content={createdISO} />
  <meta property="article:modified_time" content={lastUpdatedISO} />
  <meta property="article:section" content="Software Development" />

  {#each tags as tag}
    <meta property="article:tag" content={tag} />
  {/each}

</svelte:head>
<template>
  <article>
    <header>
      <h1>{title}</h1>
      <p class="subtitle">{subtitle}</p>

      <p class="date">
        <time datetime={lastUpdatedISO}>{lastUpdatedISO}</time>
        {#if updated}
          <span class="created">
            Created:
            <time datetime={createdISO}>{createdISO}</time>
          </span>
        {/if}
      </p>
    </header>
    <hr />
    <section class="document">
      {@html html}
    </section>
  </article>
</template>
