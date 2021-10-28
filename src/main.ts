import "document-register-element/build/document-register-element";
import vueCustomElement from "vue-custom-element";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
import App from "./App.vue";
import NewsletterOptIn from "./components/NewsletterOptIn.vue";

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(vueCustomElement);

Vue.customElement("charles-newsletter", NewsletterOptIn);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
