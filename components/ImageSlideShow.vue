<script lang="ts" setup>
defineProps<{
  image: ImageFile,
}>();

const emit = defineEmits(['close', 'next', 'previous']);

onMounted(() => {
  window.addEventListener('keydown', onKeyDown);
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown);
});

function onKeyDown(event: KeyboardEvent) {
  if (event.key == 'Escape') {
    emit('close');
  } else if (event.key == 'ArrowLeft') {
    emit('previous');
  } else if (event.key == 'ArrowRight') {
    emit('next');
  }
};


const imageFullSizeURL = (image: ImageFile) => "/images/full_size/" + image.name + "." + image.format;

let hideNav = ref(true);
</script>

<template>
  <div @click="emit('close')" class="container">
    <div class="inner-container">
      <div @mouseenter="hideNav = false" class="nav-button" :class="{ hidden: hideNav }">
        <div @click.stop="emit('previous')" class="nav-circle">
          &#8592;
        </div>
      </div>

      <img @mouseenter="hideNav = true" @mouseleave="hideNav = false" @click.stop="" :src="imageFullSizeURL(image)"
        loading="eager">

      <div @mouseenter="hideNav = false" class="nav-button" :class="{ hidden: hideNav }">
        <div @click.stop="emit('next')" class="nav-circle">
          &#8594;
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 5;
  background-color: rgba(black, 0.90);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center
}


.inner-container {
  height: 95%;
  width: 95%;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;

    flex-direction: column;
  }
}

img {
  max-width: min(95%, calc(100% - 400px));
  max-height: 95%;
  cursor: default;

  @media screen and (max-width: 768px) {
    max-height: calc(100% - 200px);
    max-width: 95%;
  }
}

.nav-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: min-content;
  margin: 0 100px;
  color: white;
  font-size: 5em;
  text-align: center;
  user-select: none;

  transition: opacity 0.25s;
}

.hidden {
  opacity: 0;

  @media screen and (hover: none) {
    opacity: 1;
  }
}

.nav-circle {
  background-color: rgb(62, 62, 62);
  border-radius: 100%;
  width: 100px;
  height: 100px;
  cursor: pointer;

  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(134, 134, 134);
  }

  @media screen and (max-width: 768px) {
    transform: rotate(90deg);
  }
}
</style>
