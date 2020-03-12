<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input class="header-input" type="text" data-test="input" v-model="inputValue"
        @keyup.enter="addTodoItem"
        placeholder="Add UndoItem"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
<style lang="stylus">
  .header {
    background: #666;
    line-height: 66px;
  }
  .header-content {
    width 600px
    margin 0 auto
    color #333
    font-size 24px
  }
  .header-input {
    float right
    width 360px
    margin-top 16px
    line-height 24px
    color #333
    text-indent 10px
  }
</style>
