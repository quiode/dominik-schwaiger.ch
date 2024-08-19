<script lang="ts" setup>
import type { ImageFile } from '~/server/api/images.post';

let images = ref([] as ImageFile[]);
$fetch<ImageFile[]>('/images/images.json').then(data => images.value = data);

const imageFullSizeURL = (image: ImageFile) => "/images/full_size/" + image.name + "." + image.format;
const imageThumbnailURL = (image: ImageFile) => "/images/thumbnails/" + image.name + "." + image.format;
</script>

<template>
  <div class="gallery">
    <a v-for="image in images" class="image" :href="imageFullSizeURL(image)"    target="_blank">
      <img :src="imageThumbnailURL(image)" loading="lazy" />
    </a>
  </div>
</template>

<style scoped lang="scss">
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .image {
    margin: 10px 0;
  }

  img {
    width: 20vw;
    aspect-ratio: 1/1;
  }
</style>