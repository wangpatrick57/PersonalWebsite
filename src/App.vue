<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        document.title = 'Patrick Wang'
      }
    }
  }
}
</script>
