<template>
  <div class="charles-newsletter">
    <form
      v-if="!isDone"
      class="charles-newsletter-form"
      @submit.prevent="onSubmit"
    >
      <h1>{{ heading }}</h1>
      <p>{{ description }}</p>

      <CInput type="text" placeholder="Your Name" v-model="name" />
      <CInput type="tel" placeholder="Your Phone Number" v-model="phone" />

      <CCheckbox id="agreed" v-model="hasAgreed">
        <p>
          {{ legalText }}
          <a :href="privacyPolicyLink" target="_blank">Link</a>
        </p>
      </CCheckbox>

      <CtaButton type="submit">{{ ctaButtonLabel }}</CtaButton>
    </form>
    <NewsletterOptInSuccess v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import CtaButton from "./CtaButton.vue";
import CInput from "./BaseInput.vue";
import CCheckbox from "./BaseCheckbox.vue";
import NewsletterOptInSuccess from "./NewsletterOptInSuccess.vue";

export default defineComponent({
  components: {
    CtaButton,
    CInput,
    CCheckbox,
    NewsletterOptInSuccess,
  },
  props: {
    heading: {
      type: String,
      default: "Get our Whatsapp Newsletter",
    },
    description: {
      type: String,
      default:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid repellat quisquam non molestiae, unde libero cupiditate quia",
    },
    legalText: {
      type: String,
      default:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid repellat quisquam non molestiae, unde libero cupiditate quia",
    },
    privacyPolicyLink: {
      type: String,
      default: "https://hello-charles.com",
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

    const isDone = ref(false);

    const onSubmit = () => {
      // TODO: Do actual API call
      isDone.value = true;
    };

    return { phone, name, hasAgreed, onSubmit, isDone };
  },
});
</script>

<style lang="scss">
@import "../styles/index.scss";

.charles-newsletter {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  text-align: center;
  background-color: white;

  h1 {
    font-size: 1rem;
    margin-bottom: 8px;
  }
}

.charles-newsletter-form {
  display: flex;
  flex-direction: column;
  max-width: $newsletter-content;
  padding: 3rem;
  margin: auto;
}
</style>
