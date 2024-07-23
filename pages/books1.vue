<template>
  <div>
    <div :class="$style.preview" class="scrollEl">
      <img :class="$style.img" src="~/public/images/01.jpg" alt="" />
      <div :class="$style.info">
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
const appStore = useAppStore();

var previousPosition = ref(window.pageYOffset);

onMounted(() => {
  window.addEventListener("scroll", function () {
    const scrollElPosition = document
      .getElementsByClassName("scrollEl")[0]
      .getBoundingClientRect();
    if (scrollElPosition.top > previousPosition.value.y) {
      previousPosition.value = document
        .getElementsByClassName("scrollEl")[0]
        .getBoundingClientRect();
      window.scrollTo({
        top: 1200,
        behavior: "smooth",
      });
    }
    if (scrollElPosition.top.y > 110) {
      previousPosition.value = scrollElPosition.top;
    }
    console.log(previousPosition.value.y);
    console.log(scrollElPosition.top);

    // document.getElementById("scrollEl").innerHTML = pageYOffset + "1200px";
  });
});

// onMounted(() => {
//   window.addEventListener("scroll", function (e) {
//     const markingCards = e.srcElement.getElementsByClassName("markingCard");

//     console.log("dddd");
//     for (let i = 0; i < markingCards.length; i++) {
//       if (markingCards[i].getBoundingClientRect().top > 0) {
//         activeCharacter.value = markingCards[i].id;
//         break;
//       }
//     }
//   });
// });
</script>
<style lang="scss" module>
.preview {
  max-width: 100%;
  min-height: calc(100vh - 8.25rem);
  margin: 1.5rem;

  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  .img {
    object-fit: cover;
    width: 55rem;
    //border-radius: 1.25rem;
    height: 45rem;
  }
  .info {
    // background: hsla(0, 0%, 0%, 0.5);
    min-height: calc(100vh - 8.25rem);
    width: calc(100vh - 25rem);
    padding: 0 1.5rem;
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
