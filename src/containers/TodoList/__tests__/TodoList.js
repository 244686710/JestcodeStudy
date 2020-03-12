import { shallowMount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import Header from '../components/Header.vue'

describe('TodoList.vue', () => {
  it('TodoItem 初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 监听到 header 的add时间时，会增加一个内容', () => {
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    // wrapper.vm.addUndoItem('abc')
    header.vm.$emit('add', 'abc')
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual(['abc'])
  })
})
