<template>
  <div :class="$style.body">
    <div :class="$style.left">
      <img :class="$style.picture" src="~/public/images/0101.jpg" />
    </div>
    <div :class="$style.right">
      <div :class="$style.gallery">
        <img :class="$style.picture" src="~/public/images/0101.jpg" />
        <img :class="$style.picture" src="~/public/images/0101.jpg" />
        <img :class="$style.picture" src="~/public/images/0101.jpg" />
      </div>
      <div :class="$style.title">
        Марта, К. Философы и поэты-моралисты во времена Римской Империи /
        сочинение Констана Марта. - Москва : издание К. Т. Солдатенкова, 1879 :
        Типография Мартынова и К'., на Тверской ул., д. Хомяковых. - 380, [1] с.
        ББК 87.3(0)323 ББК 83.3(0)323
      </div>
      <div :class="$style.text">
        Прижизненное издание Бенджамина-Константа Марта, также писавшего под
        именем Константа Марта (1820–1895), французского моралиста, историка
        античной морали, члена Академии моральных и политических наук. Книга
        посвящена философам, исследующим нравственность, и поэтам-моралистам
        времён Римской империи, включает рассказы о жизни и творчестве Луция
        Аннея Сенеки, Эпиктета, императора Марка Аврелия и др. Является изданием
        Козьмы Терентьевича Солдатёнкова (1818–1901), который в 1856 г.
        организовал издательство, а в 1857 г. открыл книжный магазин. Стремясь
        сделать книги доступными широкому читателю, часто продавал их ниже
        себестоимости. Книга в полукожаном переплёте с тиснением: картон,
        покрытый мраморной бумагой, корешок из коричневой кожи, кругленый
        передний обрез. В книге штампы: «Гродненская Областная БИБЛИОТЕКА», «ИЗЪ
        БИБЛИОТЕКИ С. П. Бургской ДУХОВНОЙ АКАДЕМIИ.».
      </div>
      <hr :class="$style.divider" />
      <div :class="$style.info">
        <div :class="$style.name">Дата поступления в библиотеку</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.descrpiotion">28.03.21</div>
      </div>
      <div :class="$style.info">
        <div :class="$style.name">Инвентарный номер</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.descrpiotion">1БО277277</div>
      </div>
      <div :class="$style.info">
        <div :class="$style.name">Подарено</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.descrpiotion">
          Брестскаяобластная библиотека имени М. Горького
        </div>
      </div>
      <div :class="$style.info">
        <div :class="$style.name">Дата поступления в библиотеку</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.descrpiotion">28.03.21</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
.body {
  @include container;
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-top: 0;
  position: fixed;
  padding-right: 0rem;
  .left {
    @include shadow-left;
    width: 26.25rem;
    height: 100vh;
    padding-top: 2.25rem;
    padding-right: 1.5rem;
    overflow-y: scroll;
    .picture {
      @include shadow;
      width: 100%;
      height: 36.25rem;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  .right {
    flex: 1;
    padding: 2.25rem 1.5rem;
    height: 100vh;
    overflow-y: scroll;
    .gallery {
      display: flex;
      justify-content: space-between;
      .picture {
        @include shadow;
        width: 15.25rem;
        height: 22.5rem;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }
    .title {
      @include LargTextBold;
      margin-top: 2.25rem;
      text-align: justify;
    }
    .text {
      @include LargText;
      margin-top: 1.5rem;
      text-align: justify;
    }
    .divider {
      height: 1px;
      opacity: 0.6;
      margin: 2.25rem 0;
      flex: 1;
    }
    .info {
      @include LargText;
      display: flex;
      color: $light-opacity;
      align-items: center;
      .name {
        padding-right: 0.5rem;
      }
      .dividerDrop {
        opacity: 0.6;
        margin-top: 2.25rem;
        flex: 1;
        border: 1px dashed;
        position: relative;
        top: -10px;
      }
      .description {
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
