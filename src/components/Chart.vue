<template>
  <div class="chart">
    <div class="hidden">
      <slot></slot>
    </div>
    <div class="render" :class="{ 'is-error': isError }">
      <span v-html="svgCode" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: null
  },
  data() {
    return {
      svgCode: null,
      isError: false
    }
  },
  watch: {
    data() {
      if(this.data)
        this.renderChart(this.data)
    }
  },
  methods: {
    renderChart(md) {
      this.$createChart(md).then((code) => {
        this.svgCode = code
        this.isError = false
      }).catch((error) => {
        console.error(error)
        this.isError = true
      })
    }
  },
  mounted() {
    if(this.data)
      this.renderChart(this.data)
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
.is-error {
  border: 1px solid red;
  background-color: rgba(255,0,0,0.2)
}
</style>