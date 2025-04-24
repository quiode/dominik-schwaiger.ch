<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t('home'),
  titleTemplate: "%siteName"
});
definePageMeta({
  alias: '/home',
});
</script>

<template>
  <div id="root">
    <div id="container">
      <h1>{{ $t('welcome') }}</h1>

      <div id="avatar-container">
        <div id="avatar">
          <img src="/avatar.jpg" />
        </div>

      </div>

      <div>
        {{ $t('about_me') }}
      </div>

      <div class="webring">
        <webring-banner theme="dark"></webring-banner>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/colors.scss';

#root {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 1.5%;
  padding: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
}

.webring {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3%;

  webring-banner {
    width: max-content;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 0.75em;
  width: 50%;
  position: relative;
  top: 2.5%;
  font-size: 2.5em;

  @media screen and (max-width: 768px) {
    top: 1em !important;
    width: 80%;
    font-size: large;
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
  $width: 200px;
  width: $width;
  aspect-ratio: 1/1;

  img {
    position: relative;
    object-fit: fill;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transition: transform 1s ease;

    &:hover {
      transform: rotate(360deg);
    }
  }

  &::before {
    // gradient border
    content: '';
    position: absolute;
    display: block;
    padding: $border;
    width: $width;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: colors.$gradient-light-top;
    z-index: -1;
    animation: spin 4s linear infinite;
    transform: translate(-$border, -$border) rotate(0deg);

    @keyframes spin {
      100% {
        transform: translate(-$border, -$border) rotate(360deg);
      }
    }
  }
}
</style>