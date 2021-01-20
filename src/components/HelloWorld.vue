<template>
  <div class="hello">
    <textarea v-model="message" rows="10" />
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
