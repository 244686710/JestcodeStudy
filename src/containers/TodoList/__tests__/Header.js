import { shallowMount } from '@vue/test-utils'
import Header from '../components/Header.vue'

describe('Header.vue', () => {
  it('Header 样式发生改变时 做出提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
  it('Header 组件包含input', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })
  it('Header 中 input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })
  it('Header 中input值发生变化时，数据应该跟着变', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    const testValue = 'test value'
    input.setValue(testValue)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toEqual(testValue)
  })
  it('Header 中input无内容是回车，无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('Header 中input 有内容是，向外触发时间，后内容清空', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('test value')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toEqual('')
  })
})
