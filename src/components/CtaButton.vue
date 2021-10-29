<template>
  <button :type="type">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

button {
  padding: 0.5rem;
  cursor: pointer;
  background-color: $green-whatsapp;
  border-radius: 1rem;
  border: none;
  color: white;
}
</style>
