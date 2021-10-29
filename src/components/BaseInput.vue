<template>
  <input :type="type" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "text",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

input {
  padding: 0.5rem;
  background-color: $gray-light;
  border: none;
}
</style>
