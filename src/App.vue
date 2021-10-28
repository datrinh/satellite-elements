<template>
  <div id="app">
    <h1>Kitchen Sink</h1>
    <NewsletterOptInPlayground />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import NewsletterOptInPlayground from "./components/NewsletterOptInPlayground.vue";

export default defineComponent({
  name: "App",
  components: {
    NewsletterOptInPlayground,
  },
});
</script>
