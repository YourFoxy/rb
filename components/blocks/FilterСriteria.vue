<template>
  <div :class="$style.container">
    <div
      :class="[$style.marker, { [$style.selectedMarker]: isSelected }]"
    ></div>
    <div :class="[$style.text, { [$style.selectedText]: isSelected }]">
      {{ criteria }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
  criteria: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.container {
  display: flex;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  .marker {
    min-width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.75rem;
    margin-top: 0.2rem;
    background-color: $disabled;
  }
  .selectedMarker {
    background-color: $light;
  }
  .text {
    @include LargText;
    color: $light-opacity;
  }
  .selectedText {
    @include LargTextBold;
  }
}
</style>
