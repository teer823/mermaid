<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="@/assets/logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" :class="{'is-active': activeMenu}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': activeMenu}">
    <div class="navbar-start">
      <a class="navbar-item" href="https://mermaid-js.github.io/mermaid-live-editor/" target="_blank">
        Mermaid Live Editor
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Charts
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" v-for="(chart, index) in charts" :key="index" @click="onSelectChart(chart)">{{ chart.name }}</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import charts from '@/charts'
export default {
  data() {
    return {
      activeMenu: false,
      charts: charts
    }
  },
  methods: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu
    },
    onSelectChart(chart) {
      this.$emit('on-select-chart', chart)
    }
  }
}
</script>