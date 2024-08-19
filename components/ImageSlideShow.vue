<script lang="ts" setup>
import type { ImageFile } from '../server/api/images.post';

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
</script>

<template>
  <div @click="emit('close')" class="container">
    <div class="inner-container">
      <img @click.stop="" :src="imageFullSizeURL(image)">
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
  }
}

img {
  max-width: 95%;
  max-height: 95%;
  cursor: default;

  @media screen and (max-width: 768px) {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
