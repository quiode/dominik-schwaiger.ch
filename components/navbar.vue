<script lang="ts" setup>
import Vr1 from './vr.vue';
const route = useRoute();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <nav>
    <hr />

    <div id="lang">
      <NuxtLink class="lang" :class="{ active: $i18n.locale == 'en' }" :to="switchLocalePath('en')">en</NuxtLink>
      <Vr style="margin: 8% 0;" class="vr"></Vr>
      <NuxtLink class="lang" :class="{ active: $i18n.locale == 'de' }" :to="switchLocalePath('de')">de</NuxtLink>
    </div>

    <hr id="mobile_hr" />

    <div id="items">
      <div class="item">
        <NuxtLink :to="localePath('/home')">{{ $t('home') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/projects')">{{ $t('projects') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/linktree')">{{ $t('linktree') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/documents')">{{ $t('documents') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/impressum')">{{ $t('impressum') }}</NuxtLink>
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
  z-index: 5;

  #mobile_hr {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      margin: 8px 15vw;
    }
  }


  #lang {
    position: absolute;
    right: 20px;
    display: flex;
    flex-wrap: nowrap;

    @media screen and (max-width: 768px) {
      position: relative;
      left: 50vw;
      transform: translateX(-50%);
      width: fit-content;
    }

    .lang {
      margin: 0 2px;

      @media screen and (max-width: 768px) {
        margin: 0 8px;
      }

      &:hover {
        color: $secondary-color;
      }
    }

    .active {
      color: $secondary-color;
      text-decoration: none !important;
    }
  }

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
        text-decoration: underline;
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
    height: initial;
  }

  .router-link-active {
    text-decoration: solid underline !important;
  }
}
</style>
