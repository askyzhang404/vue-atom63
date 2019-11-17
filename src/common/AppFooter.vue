<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
