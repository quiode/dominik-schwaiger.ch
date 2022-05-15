<script lang="ts" setup>
  const documents: {
    name: string;
    icon: string;
    path: string;
  }[] = [
    {
      name: 'Curriculum Vitae',
      icon: 'bi-file-earmark-person',
      path: 'cv.pdf',
    },
    {
      name: 'GPG Key',
      icon: 'bi-fingerprint',
      path: 'gpg.asc',
    },
  ];
</script>

<template>
  <div>
    <div id="container">
      <a
        :href="'/' + document.path"
        :download="document.path"
        target="_blank"
        v-for="document in documents"
        class="item-container"
      >
        <div
          class="icon"
          :style="{
            animationDuration: Math.random() + 2 + 's',
            animationDelay: Math.random() + 's',
          }"
        >
          <i class="bi" :class="document.icon"></i>
        </div>

        <div class="name">{{ document.name }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/colors.scss';

  #container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;

    .item-container {
      cursor: pointer;
      border-color: $secondary-color;
      border-radius: 2em;
      padding: 5em;
      margin: 5em;
      border-style: solid;

      &:hover {
        @keyframes hovering {
          $rotation: 5deg;

          0% {
            transform: rotate($rotation);
          }

          50% {
            transform: rotate(-$rotation);
          }

          100% {
            transform: rotate($rotation);
          }
        }

        animation: hovering 0.5s infinite;
      }

      .icon {
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        font-size: 10em;
        text-align: center;
        background: $gradient-light-top-right;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite;
        background-size: 400% 400%;
      }

      .name {
        text-align: center;
        font-size: 2em;
        word-break: break-all;
      }
    }
  }
</style>
