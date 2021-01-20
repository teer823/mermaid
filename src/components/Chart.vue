<template>
  <div class="chart">
    <div class="hidden">
      <slot></slot>
    </div>
    <div class="render">
      <span v-html="svgCode" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: null
  },
  data() {
    return {
      svgCode: null,
    }
  },
  watch: {
    msg() {
      this.renderChart(this.msg)
    }
  },
  methods: {
    renderChart(md) {
      this.$createChart(md).then((code) => {
        this.svgCode = code
      }) 
    }
  },
  mounted() {
    this.renderChart(this.msg)
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>