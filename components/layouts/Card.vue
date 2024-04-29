<template>
  <div :class="$style.card">
    <div :class="$style.top"></div>
    <div :class="$style.middle">
      <div :class="$style.left"></div>
      <div :class="$style.content">
        <img :class="$style.picture" src="~/public/images/0101.jpg" />
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
      <div :class="$style.right"></div>
    </div>

    <div :class="$style.bottom"></div>
  </div>
</template>

<style lang="scss" module>
.card {
  max-width: 52.125rem;
  width: 100%;
  .top,
  .bottom {
    max-width: 46.125rem;
    width: 100%;
    height: 3rem;
    background-color: $dark-green;
    margin: 0 auto;
  }
  .middle {
    display: flex;
    justify-content: space-between;
    .content {
      max-width: 43.125rem;
      width: 100%;
      height: 16.375rem;
      background-color: $green;
      align-self: center;
      border-radius: 1.25rem 1.25rem 0 1.25rem;
      padding: 1rem;
      display: flex;
      box-shadow: 4px 0px 12px rgb(0, 0, 0, 0.15);
      .picture {
        height: 100%;
        width: 10.25rem;
        border-radius: 0.25rem 0 0 0.25rem;
        object-fit: cover;
      }
      .text {
        @include LargText;
        // color: $light;
        padding-left: 0.75rem;
        overflow: hidden;
        text-align: justify;
      }
    }

    .left,
    .right {
      width: 3rem;
      height: 19.25rem;
      background-color: $dark-green;
    }
    .left {
      box-shadow: 10px 0px 12px rgb(0, 0, 0, 0.15);
    }
    .right {
      box-shadow: -10px 0px 12px rgb(0, 0, 0, 0.15);
    }
  }
  .top {
    box-shadow: 0px 10px 12px rgb(0, 0, 0, 0.15);
  }
  .bottom {
    box-shadow: 0px -10px 12px rgb(0, 0, 0, 0.15);
  }
}
</style>
