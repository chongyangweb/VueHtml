<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>

export default {
    name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html,body,#app{
 height: 100%;
}
</style>
