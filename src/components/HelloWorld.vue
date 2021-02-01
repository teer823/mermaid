<template>
  <div class="hello">
    <chart :msg="message" />
  </div>
</template>

<script>
import Chart from './Chart.vue'
export default {
  name: 'HelloWorld',
  components: {
    Chart
  },
  props: {
    msg: String,
  },
  data() {
    return {
      svgCode: null,
      message: `
    graph LR
      c1-->a2
      subgraph ide1 [one]
      a1-->a2
      end
      a2-->c1
    `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
