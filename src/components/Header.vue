<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input class="header-input" type="text" data-test="header-input" :value="inputValue"
        @input="e => changeInputVaule(e.target.value)"
        @keyup.enter="() => addTodoItem()"
        placeholder="Add UndoItem"
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',

  computed: mapState(['inputValue']),
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.changeInputVaule('')
      }
    },

    ...mapMutations({
      changeInputVaule: 'changeInputValue'
    })
  }
}
</script>
<style lang="stylus" scoped>
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
