<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("linktree"),
});
const links: {
  text: string;
  url: string;
}[] = [
  {
    text: "GitHub",
    url: "https://github.com/quiode",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/dominik-schwaiger-1a7a20226/",
  },
  {
    text: "Email",
    url: "mailto:mail@dominik-schwaiger.ch",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/domgraphy",
  },
];
</script>

<template>
  <div id="outer-container">
    <div id="inner-container">
      <a
        class="link"
        :class="{ 'link-2': index % 2 == 0 }"
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        target="_blank"
      >
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/colors.scss";

#outer-container {
  display: flex;
  justify-content: center;
}

#inner-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  gap: 5em;

  @media screen and (max-width: 786px) {
    width: 100%;
  }
}

.link {
  padding: 5% 0;
  border: 1px;
  border-style: solid;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;

  /* hover */
  background: linear-gradient(
    to left,
    colors.$background-color 50%,
    colors.$secondary-color 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease;

  @media screen and (max-width: 768px) {
    font-size: 1em !important;
  }

  @media screen and (max-width: 1400px) {
    font-size: 1.25em !important;
  }

  &:hover {
    background-position: left bottom;
  }
}

.link-2 {
  background-position: left bottom !important;
  background-image: linear-gradient(
    to right,
    colors.$background-color 50%,
    colors.$secondary-color 50%
  ) !important;

  &:hover {
    background-position: right bottom !important;
  }
}
</style>
