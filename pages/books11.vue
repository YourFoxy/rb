<template>
  <div>
    <div :class="$style.preview">
      <div :class="$style.blur">
        <div :class="$style.title">Барановичский краеведческий музей</div>
        <div :class="$style.text">
          Барановичский краеведческий музей - один из старейших в Брестской
          области, размещается в исторической части города, в здании нач. ХХ в.
          (ул. Советская, 72). В настоящее время музей является одним из ведущих
          культурно-образовательных центров г. Барановичи. За многие годы его
          работы разным поколениям барановичских музейщиков удалось сформировать
          богатое музейное собрание, которое насчитывает более 45 тыс. единиц
          хранения. Жители и гости города могут посетить основную  музейную
          экспозицию «Природа родного края. Город Барановичи. Барановичский край
          от первобытнообщинного строя до середины ХХ в.». Барановичский
          краеведческий музей располагает и выставочным залом (пл. 140 м. кв.,
          ул. Советская, 88), где постоянно организуются различные временные
          экспозиции с проведением экскурсий.
        </div>
      </div>
    </div>
    <Books />
  </div>
</template>
<script setup>
import Books from "~/pages/books.vue";
</script>
<style lang="scss" module>
.preview {
  max-width: 100%;
  min-height: calc(100vh - 8.25rem);
  margin: 1.5rem;
  background-image: url("~/public/images/01.jpg");
  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  .blur {
    max-width: 70%;
    // background: hsla(0, 0%, 0%, 0.5);
    min-height: calc(100vh - 8.25rem);
    background-color: $black-opacity;

    backdrop-filter: blur(10px);
    padding: 2rem 1.5rem;
    // z-index: 1;
    .title {
      @include H3;
      padding-bottom: 1.5rem;
    }
    .text {
      @include LargText;
    }
  }
}
</style>
