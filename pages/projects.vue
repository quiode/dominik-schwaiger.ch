<script lang="ts" setup>
  onMounted(() => {
    // if fill-content is included in classList, wait a little bit
    // to make sure it's done

    let delay = 400;

    if (document.documentElement.classList.contains('fill-content')) {
      delay = 450;
    }

    setTimeout(() => {
      document.documentElement.classList.add('fill-content');
    }, delay);
  });

  onUnmounted(() => {
    setTimeout(() => {
      document.documentElement.classList.remove('fill-content');
      console.log('0');
    }, 400);
  });

  const projects: {
    imageSrc?: string;
    links?: { icon: string; url: string }[];
    tools?: { icon: string; url: string }[];
    text?: string;
  }[] = [
    {
      imageSrc: 'nowple.png',
      links: [
        {
          icon: 'globe.svg',
          url: 'https://nowple.ch/',
        },
        {
          icon: 'github.svg',
          url: 'https://github.com/quiode/nowple',
        },
      ],
      tools: [
        {
          icon: 'angular.svg',
          url: 'https://angular.io/',
        },
        {
          icon: 'nestjs.svg',
          url: 'https://nestjs.com/',
        },
        {
          icon: 'tauri.svg',
          url: 'https://tauri.studio/',
        },
        {
          icon: 'bootstrap.svg',
          url: 'https://getbootstrap.com/',
        },
      ],
      text: 'My final project in my informatics Course during the Kantonsschule Wattwil. This website is a simple dating website with a chat feature. The main selling point is the multitude of matching options.',
    },
    {
      imageSrc: 'troytd.png',
      links: [{ icon: 'github.svg', url: 'https://github.com/quiode/TroyTD' }],
      tools: [
        { icon: 'libgdx.svg', url: 'https://libgdx.com/' },
        {
          icon: 'java.svg',
          url: 'https://www.java.com',
        },
      ],
      text: ' A tower defence game. Based on the trojan war. Build with libGDX.',
    },
    {
      imageSrc: 'linux.svg',
      links: [{ icon: 'github.svg', url: 'https://github.com/quiode/DOS' }],
      tools: [
        { icon: 'arch.svg', url: 'https://archlinux.org/' },
        {
          icon: 'pop.svg',
          url: 'https://pop.system76.com/',
        },
      ],
      text: 'Simple configurations and scripts for various linux distributions.',
    },
  ];
</script>

<template>
  <div id="outer-container">
    <div
      v-for="(project, index) in projects"
      :key="index"
      :style="{
        animationName: index % 2 == 0 ? 'flyInFromRight' : 'flyInFromLeft',
        animationDuration: 2 + index * 0.25 + 's',
      }"
      class="inner-container"
    >
      <Project v-bind="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #outer-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    overflow: hidden;
  }

  .inner-container {
    width: 90%;

    // fly in from the left at the start
    animation: flyInFromLeft 2s ease-in-out forwards;
  }

  @media (max-width: 768px) {
    #outer-container {
      width: 100%;
    }
    .inner-container {
      &:first-child {
        margin-top: 0.5em;
      }

      &:last-child {
        margin-bottom: 1em;
      }

      margin-top: 5em;
    }
  }
</style>

<style>
  @keyframes flyInFromLeft {
    0% {
      transform: translateX(-100vw);
    }

    25% {
      transform: translateX(-100vw);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes flyInFromRight {
    0% {
      transform: translateX(100vw);
    }

    25% {
      transform: translateX(100vw);
    }

    100% {
      transform: translateX(0);
    }
  }
</style>
