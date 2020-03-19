import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import { findTestWrapper } from '../../../utils/testUtils'
import store from '../../../store/index'
import axios from '../__mocks__/axios'
beforeEach(() => {
  axios.success = true
  jest.useFakeTimers()
})

describe('TodoList组件', () => {
  it(`
    1. 用户进入页面时，请求远程数据
    2. 列表应该展示远程返回数据
  `, () => {
    const wrapper = mount(TodoList, { store })
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$nextTick(() => {
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(listItems.length).toBe(3)
      })
    })
  })
  it(`
    1. 用户进入页面时，请求远程数据失败
    2. 列表应该展示空数据，不应该挂掉
  `, () => {
    axios.success = false
    const wrapper = mount(TodoList, { store })
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$nextTick(() => {
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(listItems.length).toBe(0)
      })
    })
  })
})
