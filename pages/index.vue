<script lang="ts" setup>
  definePageMeta({
    alias: '/home',
  });
</script>

<template>
  <div id="root">
    <div id="container">
      <div id="avatar-container">
        <div id="avatar">
          <img src="/avatar.jpg" />
        </div>
      </div>
      <div id="text">Welcome to my website!</div>
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
    width: 50%;
    position: relative;
    top: 2.5%;

    @media screen and (max-width: 768px) {
      grid-template-columns: auto !important;

      top: 5% !important;
    }
  }

  #text {
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
    $width: 250px;
    width: $width;
    aspect-ratio: 1/1;

    @media screen and (max-width: 768px) {
      $width-new: 75%;

      width: $width-new !important;

      &::before {
        width: $width-new !important;
        left: calc((100% - $width-new) / 2) - 1% !important;
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
</style>
