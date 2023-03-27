<script lang="ts" setup>
onUnmounted(() => {
  setTimeout(() => {
    document.documentElement.classList.remove('fill-content');
    console.log('0');
  }, 400);


});

const { t } = useI18n()

const projects: {
  imageSrc?: string;
  links?: { icon: string; url: string }[];
  tools?: { icon: string; url: string }[];
  text?: string;
}[] = [
    {
      imageSrc: 'arp-logo.png',
      links: [
        {
          icon: 'github.svg',
          url: 'https://github.com/quiode/arp'
        }
      ],
      text: t('arp'),
      tools: [
        {
          icon: 'rust.png',
          url: 'https://www.rust-lang.org/'
        },
        {
          icon: 'gtk.svg',
          url: 'https://www.gtk.org/'
        }
      ]
    },
    {
      imageSrc: 'nowple.png',
      links: [
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
          icon: 'bootstrap.svg',
          url: 'https://getbootstrap.com/',
        },
      ],
      text: t('nowple'),
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
      text: t('troytd'),
    },
    {
      imageSrc: 'heebphotography.png',
      links: [
        {
          icon: 'instagram.svg',
          url: 'https://www.instagram.com/heebphotography/',
        }, {
          icon: 'github.svg',
          url: 'https://github.com/quiode/Website-Andi'
        },
        {
          icon: 'globe.svg',
          url: 'https://heebphotography.ch'
        }
      ],
      tools: [
        {
          icon: 'php.svg',
          url: 'https://www.php.net/'
        },
        {
          icon: 'python.svg',
          url: 'https://www.python.org/'
        },
        {
          icon: 'apache.svg',
          url: 'https://www.apache.org'
        }
      ],
      text: t('heebphotography')
    },
    {
      imageSrc: 'chris.png',
      text: t('christophbaertsch'),
      links: [
        {
          icon: 'instagram.svg',
          url: 'https://www.instagram.com/chrisps_photography/',
        }, {
          icon: 'github.svg',
          url: 'https://github.com/quiode/Website-Chris'
        },
        {
          icon: 'globe.svg',
          url: 'https://christoph-baertsch.ch/#/stills'
        }
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
          icon: 'bootstrap.svg',
          url: 'https://getbootstrap.com/',
        },
      ],
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
      text: t('dos'),
    },
  ];
</script>

<template>
  <div id="outer-container">
    <div v-for="(project, index) in projects" :key="index" :style="{
      animationName: index % 2 == 0 ? 'flyInFromRight' : 'flyInFromLeft',
      animationDuration: 2 + index * 0.25 + 's',
    }" class="inner-container">
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
  @media screen and (min-width: 764px) {
    margin-top: 4vh;
  }

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
