<script lang="ts" setup></script>

<template>
  <nav>
    <hr />

    <div id="title"></div>
    <div id="items">
      <div class="item">
        <NuxtLink to="/home">Home</NuxtLink>
      </div>

      <div class="vr"></div>

      <div class="item">
        <NuxtLink to="/top5">Projects</NuxtLink>
      </div>

      <div class="vr"></div>

      <div class="item">
        <NuxtLink to="/linktree">Linktree</NuxtLink>
      </div>

      <div class="vr"></div>

      <div class="item">
        <NuxtLink to="/documents">Documents</NuxtLink>
      </div>

      <div class="vr"></div>

      <div class="item">
        <NuxtLink to="/impressum">Impressum</NuxtLink>
      </div>
    </div>

    <hr />
  </nav>
</template>

<style lang="scss" scoped>
  @import '../assets/colors.scss';

  nav {
    position: relative;
    width: 100%;
    height: 5%;

    // hr {
    //   margin: 8px 1%;
    // }

    #items {
      // flex
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      // everythin else
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 35%;

      @media screen and (max-width: 768px) {
        width: 90%;
      }

      .item {
        color: $primary-color;
        text-decoration: none;
        $margin: 1%;
        margin: 0 $margin;

        :visited {
          color: $primary-color;
        }

        :hover {
          color: $primary-color;
          opacity: 0.8;
        }

        :active {
          color: $primary-color;
        }

        :link {
          color: $primary-color;
          text-decoration: none;
        }
      }
    }

    .vr {
      width: 1px;
      background-color: $primary-color;
    }
  }
</style>
