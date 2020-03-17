import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import { findTestWrapper } from '../../../utils/testUtils'

describe('TodoList组件', () => {
  it(`
    1. 用户在header 输入框输入内容
    2. 用户点击回车
    3. 列表应该增加用户输入内容的列表项
  `, () => {
    const wrapper = mount(TodoList)
    const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
    const content = 'Dell Lee'
    inputElem.setValue(content)
    inputElem.trigger('change')
    inputElem.trigger('keyup.enter')
    // expect(inputElem.element.value).toEqual(content)
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(1)
    expect(listItems.at(0).text()).toEqual(content)
  })
})
