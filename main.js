import utils from './js/utils.js'
// import { Layout } from './views/app/index.model.js'

// const app = Vue.createApp(Layout)
app.provide('$axios', axios)
app.provide('$utils', utils)

app.mount('#app')