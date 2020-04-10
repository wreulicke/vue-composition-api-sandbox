import Vue from "vue"
import VueCompositionApi from "@vue/composition-api"
import App from "./App.vue"

Vue.use(VueCompositionApi)
new Vue({
  el: "#container",
  components: { App },
  render: (h) => h(App),
})
