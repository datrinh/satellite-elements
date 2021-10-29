<template>
  <div class="charles-checkbox">
    <input :id="id" type="checkbox" />
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.charles-checkbox {
  display: flex;
  align-items: center;
  text-align: left;

  label {
    cursor: pointer;
  }
  input[type="checkbox"] {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 8px;
  }
}
</style>
