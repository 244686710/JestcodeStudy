<template>
  <div>
    <div data-test="count">{{list.length}}</div>
    <ul>
      <li v-for="(item, index) in list" :key="index"
        data-test="item"
      >
        {{item}}
        <span data-test="delete-button" @click="deleteItem(index)">-</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'UndoList',
  props: {
    list: {

    }
  },
  data () {
    return {
    }
  },
  methods: {
    deleteItem (index) {
      this.$emit('deleteItem', index)
    }
  }
}
</script>
<style lang="stylus">
</style>
