<template>
  <div>
    <h1>Newsletter</h1>

    <input type="text" placeholder="Title" v-model="title" />
    <input type="text" placeholder="Description" v-model="description" />
    <input type="text" placeholder="Legal Text" v-model="legalText" />
    <input
      type="text"
      placeholder="Privacy Policy Link"
      v-model="privacyPolicyLink"
    />
    <input
      type="text"
      placeholder="CTA Button Label"
      v-model="ctaButtonLabel"
    />

    <charles-newsletter
      :title="title"
      :description="description"
      :legal-text="legalText"
      :privacy-policy-link="privacyPolicyLink"
      :cta-button-label="ctaButtonLabel"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const title = ref("Get our Whatsapp Newsletter");
    const description = ref("A wonderfully welcoming description");
    const legalText = ref("Lorem Ipsum");
    const privacyPolicyLink = ref("https://hello-charles.com");
    const ctaButtonLabel = ref("Go!");

    return { title, description, legalText, privacyPolicyLink, ctaButtonLabel };
  },
});
</script>
