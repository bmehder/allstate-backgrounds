<script>
  import FormSparkAsync from "$lib/FormSparkAsync.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title
    >Allstate Background Searches - California | Allstate Background Searches</title
  >
  <meta
    name="description"
    content="Allstate Background Searches specializes in pre-employment background screening and tenant background screening in California. Get started today!"
  />
</svelte:head>

<section>
  <div class="outer">
    <div class="inner" style="--lg: var(--sm)">
      <div class="content flow">
        <h1 class="flow">
          <span class="visually-hidden">
            Allstate Backgrounds Searches, LLC
          </span>
          <img
            class="logo"
            src="/logo-allstate.webp"
            width="256"
            height="86"
            alt="Allstate Backgrounds logo"
          />
          <a href="tel:9163419913">(916) 341-9913</a>
        </h1>
        <div class="tagline h3">
          We specialize in pre-employment background screening and tenant
          background screening in California.
        </div>
        <div class="description">
          Whether you are an employer hiring a new worker or a landlord looking
          to rent, Allstate Background Searches, LLC makes sure you are getting
          honest information from your applicants.
        </div>
        <details class="flow">
          <summary> Send Us a Message </summary>
          <FormSparkAsync
            id={data.FORMSPARK_ID}
            botpoisonKey={data.BOTPOISON_KEY}
          />
        </details>
      </div>
    </div>
  </div>
</section>

<style>
  .inner {
    min-height: 100dvh;
    display: grid;
    place-content: center;
  }

  .content {
    display: grid;
    place-content: center;
    padding: var(--size-3);
    background-color: white;
    border-radius: var(--size-2);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  h1 {
    text-align: center;
  }

  .description {
    color: #595959;
  }

  .logo {
    max-width: var(--xs);
    margin-inline: auto;
  }

  .tagline {
    line-height: inherit;
    text-wrap: initial;
  }

  summary {
    color: var(--accent);
    font-weight: bold;
  }
</style>
