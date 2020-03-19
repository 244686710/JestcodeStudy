<template>
  <div>
    <Header @add="addUndoItem" />
    <div>
      <UndoList
        :list="undoList"
        @delete="handleItemDelete"
        @status="handleStatusChange"
        @reset="handleResetStatus"
      />
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import UndoList from './components/UndoList.vue'
import axios from 'axios'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  mounted () {
    /*
      {
        success: true,
        data: [
          {
            status: 'div',
            value: 'Yu yd'
          }
        ]
      }
    */
    setTimeout(() => {
      axios.get('/getUndolist.json').then((res) => {
        this.undoList = res.data
        console.log(this.undoList)
      }).catch(e => {
        console.log(e)
      })
    }, 5000)
  },

  methods: {
    /**
     * @desc 添加undoitem
     * @param { String } val input输入的value
     */
    addUndoItem (val) {
      this.undoList.push({
        value: val,
        status: 'div'
      })
    },
    /**
     * @desc 删除item
     * @param { Number } index 索引
     */
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    },

    /**
     * @description 变更item
     * @param { Number } index 索引
     */
    handleStatusChange (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newList.push({
            status: 'input', value: item.value
          })
        } else {
          newList.push({
            status: 'div', value: item.value
          })
        }
      })
      this.undoList = newList
    },
    /**
     * @description 保存编辑
     */
    handleResetStatus (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        newList.push({
          status: 'div', value: item.value
        })
      })
      this.undoList = newList
    }
  }
}
</script>
