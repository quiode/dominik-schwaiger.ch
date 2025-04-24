<script lang="ts" setup>
import pgp_key from '~/public/Dominik Schwaiger.asc?raw';

const { t } = useI18n();
useHead({
  title: t('gpg')
});

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch ($e) {
    console.error("Cannot copy gpg key. Reason: ", $e);
  }
}
</script>

<template>
  <div class="container">
    <div class="second-container" @pointerdown="copyText(pgp_key)" @click="copyText(pgp_key)">{{ pgp_key }}</div>
  </div>
</template>

<style scoped lang="scss">
p {
  text-align: justify;
  text-align-last: center;
}

.container {
  display: flex;
  justify-content: center;

  @media screen and (max-width: 769px) {
    font-size: small;
  }
}

.second-container {
  width: 40em;
  font-size: large;
  font-family: monospace, monospace !important;
  text-align: center;
  cursor: copy;

  @media screen and (max-width: 769px) {
    font-size: small;
    width: 90%;
  }
}
</style>