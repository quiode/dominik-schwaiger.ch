<script lang="ts" setup>
import Vr1 from './vr.vue';
const route = useRoute();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <nav>
    <hr />

    <div id="items">
      <div class="item" :class="{ underline: route.name == 'index' }">
        <NuxtLink :to="localePath('/home')">{{ $t('home') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item" :class="{ underline: route.name == 'projects' }">
        <NuxtLink :to="localePath('/projects')">{{ $t('projects') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item" :class="{ underline: route.name == 'linktree' }">
        <NuxtLink :to="localePath('/linktree')">{{ $t('linktree') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item" :class="{ underline: route.name == 'documents' }">
        <NuxtLink :to="localePath('/documents')">{{ $t('documents') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item" :class="{ underline: route.name == 'impressum' }">
        <NuxtLink :to="localePath('/impressum')">{{ $t('impressum') }}</NuxtLink>
      </div>
    </div>


    <div id="lang">
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('de')">Deutsch</NuxtLink>
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

  .underline {
    text-decoration: solid underline !important;
  }
}
</style>
