// import "document-register-element/build/document-register-element";
import vueCustomElement from "vue-custom-element";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
// import App from "./App.vue";
import NewsletterOptIn from "./components/NewsletterOptIn.vue";

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(vueCustomElement);

const ceOptions = {
  shadow: true,
  beforeCreateVueInstance(root: any) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode;
    } else {
      root.shadowRoot = document.head;
    }
    return root;
  },
  shadowCss: `
    :host {
      width: 100%;
      height: 100%;
    }
  `,
};

Vue.customElement("charles-newsletter", NewsletterOptIn, ceOptions);

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
