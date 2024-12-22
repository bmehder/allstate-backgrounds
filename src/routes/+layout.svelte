<script>
  import "$lib/style.css";

  let { children } = $props();
</script>

<div id="wrapper">
  <main>
    {@render children()}
  </main>
</div>

<style>
  #wrapper {
    background-image: url("/pattern.png");
  }

  main {
    min-height: 100dvh;
  }
</style>
