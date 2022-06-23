// Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  components: {
  },
  data() {
    return {
      ctxUrl: '',
      navList: [
        { title: '复习·CSS篇', url: 'views/pages/css-review/index.html' },
        { title: '复习·JS篇', url: 'views/pages/js-review/index.html' },
      ]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    navTo (args) {
      const { url } = args
      if (!url) return;
      this.ctxUrl = url
    }
  }
})
