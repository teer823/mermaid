<template>
  <div class="home container">
    <Header @on-select-chart="onSelectChart"/>
    <h1 class="is-size-1 has-text-weight-bold has-text-left"> {{ chart.name }} </h1>
    <Chart :data="chart.data" />
    <textarea class='textarea' rows="10" v-model="chart.data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Chart from '@/components/Chart.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Chart
  },
  data() {
    return {
      chart: {
        name: 'Select Chart',
        data: ''
      }
    }
  },
  methods: {
    onSelectChart(chart) {
      this.chart = chart
    }
  }
}
</script>
