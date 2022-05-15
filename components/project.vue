<script lang="ts" setup>
  defineProps<{
    imageSrc?: string;
    links?: { icon: string; url: string }[];
    tools?: { icon: string; url: string }[];
    text?: string;
  }>();
</script>

<template>
  <div>
    <div id="container">
      <div id="image">
        <img :src="imageSrc" />
      </div>
      <Vr class="vr"></Vr>
      <div id="text">
        {{ text }}
      </div>
      <Vr class="vr"></Vr>
      <div id="links">
        <div v-for="link in links">
          <a :href="link.url" target="_blank"><img :src="link.icon" /></a>
          <a target="_blank" class="link-text" :href="link.url">{{ link.url }}</a>
        </div>
      </div>
      <Vr class="vr"></Vr>
      <div id="tools">
        <div v-for="tool in tools">
          <a :href="tool.url" target="_blank">
            <img color="white" :src="tool.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/colors.scss';

  #container {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 10em;

    border: solid $secondary-color;
    border-radius: 20px;

    #image {
      height: 70%;

      img {
        width: auto;
        height: 100%;
      }
    }

    #text {
      // font-size: 1.5em;
      max-height: 90%;
      max-width: 30%;
    }

    #links {
      // border: solid $secondary-color;
      border-radius: 20px;
      padding: 0.1em 1em;

      div {
        margin: 0.4em 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;

        img {
          width: 2.5em;

          transition: transform 0.2s ease;

          &:hover {
            transform: rotate(10deg);
          }
        }

        .link-text {
          margin-left: 10%;
          width: 15em;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    #tools {
      // border: solid $secondary-color;
      border-radius: 20px;
      padding: 0.5em;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;

      img {
        width: auto;
        height: 2.5em;
        margin: 0.2em;

        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.5);
        }
      }
    }

    .vr {
      background-color: $quaternary-color;
    }
  }

  @media screen and (max-width: 768px) {
    #container {
      flex-direction: column;
      height: 100%;
      padding-top: 0.5em;
    }

    #image {
      width: 70%;
      height: auto !important;

      img {
        width: 100% !important;
        height: auto !important;
      }
    }

    .vr {
      width: 50% !important;
      height: 1px;
      flex-shrink: 0;
      margin: 1.5em 0;
    }

    #text {
      width: 90% !important;
      height: auto !important;
      max-width: initial !important;
      max-height: initial !important;
      text-align: center;
    }
  }
</style>
