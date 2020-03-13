import { shallowMount } from '@vue/test-utils'
import Header from '../components/Header.vue'
import { findTestWrapper } from '../../../utils/testUtils'

describe('Header组件', () => {
  it('样式发生改变时 做出提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })

  it('包含input', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    expect(input.exists()).toBe(true)
  })

  it('input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('input值发生变化时，数据应该跟着变', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    const testValue = 'test value'
    input.setValue(testValue)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toEqual(testValue)
  })

  it('input无内容是回车，无反应', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input 回车有内容时，触发事件，后内容清空', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('test value')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toEqual('')
  })
})
