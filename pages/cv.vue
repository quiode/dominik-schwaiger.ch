<script lang="ts" setup>
const i18n = useI18n();

useHead({
  title: i18n.t('cv')
});

const pdfURL = computed(() => "/CV-" + i18n.locale.value + ".pdf");
const svgURL = computed(() => "/CV-" + i18n.locale.value + ".svg");
</script>

<template>
  <div class="container">
    <a :href="pdfURL" :download="$t('cv_file')" class=" inner-container">
      <img class="cv" :src="svgURL" alt="An SVG representation of my CV" />
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/colors.scss';

.container {
  display: flex;
  justify-content: center;
}

.inner-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 1em;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.cv {
  border-radius: 10px;
  border: 3px colors.$primary-color solid;
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: white 0px 0px 14px;
  }
}
</style>