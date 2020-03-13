<template>
  <div id="app">
    <TodoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TodoList from './containers/TodoList/TodoList'

export default {
  name: 'App',
  components: { TodoList }
}
</script>

<style lang="stylus">
body {
  background #cdcdcd
}
* {
  margin 0
  padding 0
}
</style>
