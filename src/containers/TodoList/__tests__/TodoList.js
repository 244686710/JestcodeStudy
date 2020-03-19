import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import { findTestWrapper } from '../../../utils/testUtils'
import store from '../../../store/index'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('TodoList组件', () => {
  // it(`
  //   1. 用户在header 输入框输入内容
  //   2. 用户点击回车
  //   3. 列表应该增加用户输入内容的列表项
  // `, () => {
  //   const wrapper = mount(TodoList, {store})
  //   const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
  //   const content = 'Dell Lee'
  //   inputElem.setValue(content)
  //   inputElem.trigger('change')
  //   inputElem.trigger('keyup.enter')
  //   // wrapper.vm.$nextTick(() => {
  //   //   const listItems = findTestWrapper(wrapper, 'list-item')
  //   //   expect(listItems.length).toBe(1)
  //   //   expect(listItems.at(0).text()).toEqual(content)

  //   // })
  // })

  it(`
    1. 用户进入页面时，请求远程数据
    2. 列表应该展示远程返回数据
  `, () => {
    // const wrapper = mount(TodoList, { store })
    // wrapper.vm.$nextTick(() => {
    //   wrapper.vm.$nextTick(() => {
    //     const listItems = findTestWrapper(wrapper, 'list-item')
    //     expect(listItems.length).toBe(3)
    //   })
    // })
  })
  it(`
  1.用户进入页面时，等待5s请求数据
  2.列表应该展示远程返回数据
  `, () => {
    const wrapper = mount(TodoList, { store })
    expect(setTimeout).toHaveBeenCalledTimes(1)
    jest.runAllTimers() // 快进
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$nextTick(() => {
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(listItems.length).toBe(3)
      })
    })
  })
})
