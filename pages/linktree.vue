<script lang="ts" setup>
const links: {
  text: string;
  url: string;
}[] = [
    {
      text: 'GitHub',
      url: 'https://github.com/quiode',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dominik-schwaiger-1a7a20226/',
    },
    {
      text: 'Email',
      url: 'mailto:mail@dominik-schwaiger.ch',
    },
  ];
</script>

<template>
  <div>
    <div id="container">
          <a class="link" :class="{ 'link-2': index % 2 == 0 }" v-for="(link, index) in links" :key="index" :href="link.url"
            target="_blank">
            {{ link.text }}
        </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/colors.scss';

#container {
  width: 65%;
  transform: translateX(-50%);
  position: relative;
  left: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
}

.link {
  margin-top: 7%;
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

  @media screen and (max-width: 768px) {
    margin-top: 35%;
    font-size: 1em !important;
  }

  @media screen and (max-width: 1400px) {
    font-size: 1.25em !important;
  }

  /* hover */
  background: linear-gradient(to left, $background-color 50%, $secondary-color 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: left bottom;
  }
}

.link-2 {
  background-position: left bottom !important;
  background-image: linear-gradient(to right,
      $background-color 50%,
      $secondary-color 50%) !important;

  &:hover {
    background-position: right bottom !important;
  }
}
</style>
