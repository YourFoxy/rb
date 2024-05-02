<template>
  <div :class="$style.card">
    <div :class="$style.name">Том 1</div>
    <img :class="$style.picture" src="~/public/images/0101.jpg" />
  </div>
</template>


.card {
  width: 12.5rem;
  height: 13.75rem;
  align-content: center;
  cursor: pointer;

  .picture {
    width: 9.375rem;
    height: 100%;
    border-radius: 0.25rem;
    object-fit: cover;
    box-shadow: 4px 0px 12px rgb(0, 0, 0, 0.15);
  }
  .name {
    @include TextBold;
    width: 12.5rem;
    // height: 1.875rem;
    text-align: center;
    position: relative;
    padding: 0.75rem;
    top: 150px;
    background-color: $dark-green;
    box-shadow: 0px 10px 12px rgb(0, 0, 0, 0.15);
  }
}
</style>
