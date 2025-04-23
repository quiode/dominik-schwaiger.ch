<script lang="ts" setup>
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
        <NuxtLink :to="localePath('/linktree')">{{ $t('linktree') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/gallery')">{{ $t('gallery') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/cv')">{{ $t('cv') }}</NuxtLink>
      </div>

      <Vr class="vr"></Vr>

      <div class="item">
        <NuxtLink :to="localePath('/gpg')">{{ $t('gpg') }}</NuxtLink>
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
@use '../assets/colors.scss';

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
        color: colors.$secondary-color;
      }
    }

    .active {
      color: colors.$secondary-color;
      text-decoration: none !important;
    }
  }

  #items {
    // flex
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    // everything else
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 35%;

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    .item {
      color: colors.$primary-color;
      text-decoration: none;
      $margin: 1%;
      margin: 0 $margin;

      :visited {
        color: colors.$primary-color;
      }

      :hover {
        color: colors.$primary-color;
        opacity: 0.8;
      }

      :active {
        color: colors.$primary-color;
        text-decoration: underline;
      }

      :link {
        color: colors.$primary-color;
        text-decoration: none;
      }
    }
  }

  .vr {
    width: 1px;
    background-color: colors.$primary-color;
    height: initial;
  }

  .router-link-active {
    text-decoration: solid underline !important;
  }
}
</style>
