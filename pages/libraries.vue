<template>
  <div>
    <div
      v-if="librarie && librarie.id"
      :class="$style.preview"
      class="scrollEl"
    >
      <div :class="$style.scroll">
        <img :class="$style.img" :src="librarie.photo" alt="" />
        <div :class="$style.info">
          <div :class="$style.title">{{ librarie.name }}</div>
          <div :class="$style.text">
            {{ librarie.description }}
          </div>
        </div>
      </div>
    </div>
    <Books />
  </div>
</template>
<script setup>
import Books from "~/pages/books.vue";
const appStore = useAppStore();
import Repository from "~/repository/index.js";
const route = useRoute();

const librarie = ref({});

const getLibraries = async () => {
  const { value, error } = await Repository.Books.getLibraries();
  librarie.value = value.find((i) => i.id == route.query.id);
};

onMounted(async () => {
  await getLibraries();
});

// var previousPosition = ref(window.pageYOffset);

// onMounted(() => {
//   window.addEventListener("scroll", function () {
//     const scrollElPosition = document
//       .getElementsByClassName("scrollEl")[0]
//       .getBoundingClientRect();
//     if (scrollElPosition.top > previousPosition.value) {
//       console.log("sss");
//       previousPosition.value = document
//         .getElementsByClassName("scrollEl")[0]
//         .getBoundingClientRect();
//       window.scrollTo({
//         top: 1200,
//         behavior: "smooth",
//       });
//     }
//     console.log(previousPosition.value);
//     console.log(scrollElPosition.top);
//     previousPosition.value = scrollElPosition.top;
//     // if (scrollElPosition.top > 110) {
//     //   previousPosition.value = scrollElPosition.top;
//     // }

//     // document.getElementById("scrollEl").innerHTML = pageYOffset + "1200px";
//   });
// });

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
  height: calc(100vh - 8.25rem);
  margin: 1.5rem;

  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
.scroll {
  height: calc(100vh - 8.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
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
