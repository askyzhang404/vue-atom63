<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
          <vue-page-transition name="overlay-down-full">
            <router-view/>
          </vue-page-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>

</script>
