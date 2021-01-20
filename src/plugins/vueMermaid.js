import mermaid from 'mermaid'

export default {
  install: function(Vue, options = {}) {
    Object.defineProperty(Vue.prototype, '$mermaid', { value: mermaid })
    Vue.mixin({
      created() {
        mermaid.initialize(options)
      }
    })
    Vue.prototype.$createChart = (markdown) => {
      return new Promise((resolve) => {
        mermaid.mermaidAPI.render('graphNode', markdown, (svgCode) => {
          resolve(svgCode)
        })
      })
    }
  },
}