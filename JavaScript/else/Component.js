/*
 * @Author: cos
 * @Date: 2022-05-03 21:35:09
 * @LastEditTime: 2022-08-06 22:50:13
 * @LastEditors: cos
 * @Description: 字节青训营 基础组件封装
 * @FilePath: \Practice-Front-End\JavaScript\else\Component.js
 */
class Component {
  constructor(id, opts = { name, data: [] }) {
    this.container = document.getElementById(id)
    this.options = opts
    this.container.innerHTML = this.render(opts.data)
  }
  registerPlugins(...plugins) {
    plugins.forEach((plugin) => {
      const pluginContainer = document.createElement('div')
      pluginContainer.className = `${name}__plugin`
      pluginContainer.innerHTML = plugin.render(this.options.data)
      this.container.appendchild(pluginContainer)

      plugin.action(this)
    })
  }
  render(data) {
    /* abstract */
    return ''
  }
}
