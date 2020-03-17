<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span data-test="count" class="count">{{list.length}}</span>
    </div>
    <ul class="list">
      <li
        data-test="list-item"
        class="item"
        v-for="(item, index) in list" :key="index"
        @click="() => changeStatus(index)"
      >
        <input type="text"
          v-if="item.status === 'input'"
          data-test="input"
          v-model="item.value"
          class="input"
          @blur="handleInputBlur"
        />
        <span v-else>{{item.value}}</span>
        <span class="delete" data-test="delete-button" @click="deleteItem(index)">-</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'UndoList',
  props: ['list'],
  data () {
    return {
      listtest: [
        { status: 'div', value: 1211121 }
      ]
    }
  },
  methods: {
    deleteItem (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    }
  }
}
</script>
<style scoped lang="stylus">
  .undolist {
    width 600px
    margin 0 auto
  }
  .title {
    line-height 30px
    font-size 24px
    font-weight bold
    margin 10px 2px
  }
  .count {
    float right
    line-height 20px
    display inline-block
    margin-top 4px
    height 20px
    width 20px
    text-align center
    background #e6e6e6
    font-size 12px
    border-radius 10px
  }
  .list {
    list-style none
  }
  .item {
    margin-bottom 10px
    line-height 32px
    font-size 14px
    background #FFF;
    border-left 5px solid #6299a6
    text-indent 10px
  }
  .delete {
    margin-top 4px
    float right
    line-height 20px
    display inline-block
    height 20px
    width 20px
    text-align center
    background #e6e6e6
    font-size 24px
    border-radius 10px
    text-indent 0
    cursor pointer
  }
  .input {
    height 22px
    width 460px
    text-indent 10px
  }
</style>
