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
      return new Promise((resolve, reject) => {
        if(mermaid.parse(markdown)) {
          mermaid.mermaidAPI.render('graphNode', markdown, (svgCode) => {
            resolve(svgCode)
          })
        } else {
          reject()
        }
        
      })
    }
  },
}