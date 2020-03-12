<template>
  <div>
    <Header @add="addUndoItem" />
    <div>
      <ul>
        <li v-for="(item, index) in undoList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    /**
     * @desc 添加undoitem
     * @param { String } val input输入的value
     */
    addUndoItem (val) {
      this.undoList.push(val)
    }
  }
}
</script>
