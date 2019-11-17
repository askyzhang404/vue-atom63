<template>
  <button class="navbar-toggler" type="button" 
          data-toggle="collapse"
          :aria-expanded="toggled"
          aria-label="Toggle navigation">
      <div class="burger"> <span></span> <span></span> <span></span> </div>
      <div class="cross"> <span></span><span></span> </div>
  </button>
</template>
<script>
export default {
  props: {
    toggled: {
      type: Boolean,
      default: false,
      description: 'Whether button is toggled'
    }
  }
};
</script>
<style>
</style>