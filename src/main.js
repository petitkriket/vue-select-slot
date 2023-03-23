// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import vSelect from "vue-select";
import Multiselect from "vue-multiselect";

Vue.config.productionTip = false;

Vue.component("v-select", vSelect);
Vue.component("multiselect", Multiselect);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
