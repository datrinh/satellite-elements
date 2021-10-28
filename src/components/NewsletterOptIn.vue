<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>

    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="tel" placeholder="Phone Number" v-model="phone" />

      <input type="checkbox" name="agreed" id="agreed" v-model="hasAgreed" />
      <p>{{ legalText }}</p>

      <button>{{ ctaButtonLabel }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Newsletter!",
    },
    description: {
      type: String,
      default: "Lorem Ipsum",
    },
    legalText: {
      type: String,
      default: "Lorem Ipsum",
    },
    privacyPolicyLink: {
      type: String,
      default: "Lorem Ipsum",
    },
    ctaButtonLabel: {
      type: String,
      default: "Submit",
    },
  },
  setup() {
    const phone = ref("");
    const name = ref("");
    const hasAgreed = ref(false);

    const onSubmit = () => {
      //
    };

    return { phone, name, hasAgreed, onSubmit };
  },
});
</script>
