<script lang="ts" setup>
definePageMeta({
  alias: '/home',
});

const birthday = 1078873200000;
const timeDiff = Math.abs(Date.now() - birthday);
const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
</script>

<template>
  <div id="root">
    <div id="container">
      <div id="avatar-container">
        <div id="avatar">
          <img src="/avatar.jpg" />
        </div>
      </div>
      <div id="text">
        <h1>{{ $t('welcome') }}</h1>
        <br>
        {{ $t('about_me') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/colors.scss';

#root {
  display: flex;
  justify-content: center;
  position: relative;
  // width: 100vw;
  // height: 100vh;
  margin: 0;
  margin-top: 1.5%;
  padding: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
}

#container {
  display: grid;
  grid-template-columns: auto auto;
  gap: 5%;
  width: 75%;
  position: relative;
  top: 2.5%;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto !important;

    top: 1em !important;

    width: 80%;
  }
}

#avatar-container {
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}

#avatar {
  $border: 4px;
  $z-index: 1;
  $width: 300px;
  width: $width;
  aspect-ratio: 1/1;

  @media screen and (min-width: 768px) {
    transform: translateY(5em);
  }

  @media screen and (max-width: 768px) {
    $width-new: initial;

    width: $width-new !important;

    &::before {
      display: block;
      width: 100% !important;
    }
  }

  img {
    position: relative;
    object-fit: fill;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    z-index: $z-index;
    transition: transform 1s ease;

    &:hover {
      transform: rotate(360deg);
    }
  }

  &::before {
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }

    // gradient border
    content: '';
    position: absolute;
    top: -$border;
    left: -$border;
    padding: $border;
    width: $width;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: $gradient-light-top;
    z-index: calc($z-index - 1);
    animation: spin 4s linear infinite;
  }
}

#text {
  font-size: 2.5em;

  @media screen and (max-width: 768px) {
    font-size: large;
  }
}
</style>
