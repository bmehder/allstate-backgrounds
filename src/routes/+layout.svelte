<script>
  import "$lib/style.css";

  let { children } = $props();
</script>

<div class="wrapper">
  <main>
    {@render children()}
  </main>
</div>

<style>
  .wrapper {
    background-image: url("/pattern.png");
  }
</style>
