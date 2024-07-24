<template>
  <div :class="$style.scroll - wrapper">
    <div :class="[$style.scroll, $style.section1]">
      <h2>Section 1th bder</h2>
    </div>
    <div :class="[$style.scroll, $style.section2]">
      <h2>Section 2</h2>
    </div>
    <div :class="[$style.scroll, $style.section3]">
      <h2>Section 3</h2>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" module>
* {
  margin: 0;
}
.scroll-wrapper {
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
.scroll {
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}
h2 {
  font-size: 50px;
  text-transform: uppercase;
  font-family: sans-serif;
}
.section1 {
  background-color: orange;
  height: 100%;
}
.section2 {
  background-color: purple;
  height: 100%;
}
.section3 {
  background-color: cyan;
  height: 100%;
}
</style>
