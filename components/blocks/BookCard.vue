<template>
  <div :class="$style.card">
    <div :class="$style.top"><div :class="$style.topShadow"></div></div>
    <div :class="$style.middle">
      <div :class="$style.left"><div :class="$style.leftShadow"></div></div>
      <div :class="$style.content">
        <div :class="$style.imgBox">
          <img :class="$style.picture" src="~/public/images/0101.jpg" />
          <div :class="$style.mask" v-if="isMultivolume">
            <div :class="$style.multivolume">Многотомник</div>
          </div>
        </div>

        <div :class="$style.text">
          Вундт В. Основы физиологической психологии : [в 16 вып.] / Вильгельм
          Вундт ; перевод под редакцией А. А. Крогиуса, А. Ф. Лазурского, А. П.
          Нечаева. - [Санкт-Петербург Вильгельм Вундт ; перевод под редакцией А.
          А. Крогиуса, А. Ф. Лазурского, А. П. Нечаева. - [Санкт-Петербург
          Вильгельм Вундт ; перевод под редакцией А. А. Крогиуса, А. Ф.
          Лазурского, А. П. Нечаева. - [Санкт-Петербург Вундт В. Основы
          физиологической психологии : [в 16 вып.] / Вильгельм Вундт ;
        </div>
      </div>
      <div :class="$style.right"><div :class="$style.rightShadow"></div></div>
    </div>
    <div :class="$style.bottom"><div :class="$style.bottomShadow"></div></div>
  </div>
</template>

<script setup>
defineProps({
  isMultivolume: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.card {
  max-width: 60.125rem;
  .middle {
    display: flex;
    justify-content: space-between;
    height: 19.5rem;
    .content {
      @include shadow;
      margin: 1.5rem;
      padding: 1rem;
      background-color: $green;
      border-radius: 1.25rem 1.25rem 0 1.25rem;
      display: flex;

      .imgBox {
        .picture {
          object-fit: cover;
          height: 14.5rem;
          width: 10.25rem;
          border-radius: 0.25rem 0 0 0.25rem;
        }
        .mask {
          height: 7.5rem;
          width: 7.5rem;
          overflow: hidden;
          position: relative;
          top: -7.75rem;
          right: -2.75rem;
          .multivolume {
            @include TextBold;
            height: 1.75rem;
            width: 10.5rem;
            background-color: $green;
            text-align: center;
            color: $light-opacity;
            align-content: center;
            transform: translate(-12px, 200%) rotate(-0.125turn);
          }
        }
      }

      .text {
        @include LargText;
        padding-left: 0.75rem;
        overflow: hidden;
      }
    }
    .left,
    .right {
      .leftShadow,
      .rightShadow {
        width: 3rem;
        height: 100%;
        background-color: $dark-green;
      }
      .leftShadow {
        @include shadow-left;
        background: linear-gradient(to left, $dark-green, rgba(0, 0, 0, 0));
      }
      .rightShadow {
        @include shadow-right;
        background: linear-gradient(to right, $dark-green, rgba(0, 0, 0, 0));
      }
    }
  }
  .top,
  .bottom {
    padding: 0 3rem;
    .topShadow,
    .bottomShadow {
      width: 100%;
      height: 3rem;
      background-color: $dark-green;
    }
    .topShadow {
      @include shadow-top;
      background: linear-gradient(to top, $dark-green, rgba(0, 0, 0, 0));
    }
    .bottomShadow {
      @include shadow-bottom;
      background: linear-gradient(to bottom, $dark-green, rgba(0, 0, 0, 0));
    }
  }
}
</style>
