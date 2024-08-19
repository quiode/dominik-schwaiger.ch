<script lang="ts" setup>
import type { ImageFile } from '~/server/api/images.post';

let selectedImage = ref(undefined as undefined | number);
let columns = ref([[], [], []] as [ImageFile[], ImageFile[], ImageFile[]]);
let images = ref([] as ImageFile[]);

$fetch<ImageFile[]>('/images/images.json').then(data => {
  columns.value = distributeElements(data);
  images.value = data;
});

// FUNCTIONS
const imageFullSizeURL = (image: ImageFile) => "/images/full_size/" + image.name + "." + image.format;
const imageThumbnailURL = (image: ImageFile) => "/images/thumbnails/" + image.name + "." + image.format;

function distributeElements<T>(inputArray: T[]): [T[], T[], T[]] {
  const array1: T[] = [];
  const array2: T[] = [];
  const array3: T[] = [];

  inputArray.forEach((element, index) => {
    if (index % 3 === 0) {
      array1.push(element);
    } else if (index % 3 === 1) {
      array2.push(element);
    } else {
      array3.push(element);
    }
  });

  return [array1, array2, array3];
}

function onSelectImage(image: ImageFile) {
  const index = images.value.indexOf(image);
  selectedImage.value = index;
}
// change body style according to selected image value
watch(selectedImage, value => {
  if (value != undefined) {
    document.body.classList.add('slideshow');
  } else {
    document.body.classList.remove('slideshow');
  }
});

onBeforeUnmount(() => {
  document.body.classList.remove('slideshow');
});
</script>

<template>
  <div class="gallery" :class="{ slideshow: selectedImage != undefined }">
    <div v-for="column in columns" class="column">
      <div v-for="image in column" class="image" @click="onSelectImage(image)">
        <img :src="imageThumbnailURL(image)" loading="lazy" />
      </div>
    </div>
  </div>

  <ImageSlideShow v-if="selectedImage != undefined" :images="images" :index="selectedImage"
    @close="selectedImage = undefined"></ImageSlideShow>
</template>

<style>
body {
  transition: opacity 250ms;
}

.slideshow {
  opacity: 0.25;
  pointer-events: none;
  overflow: hidden;
}
</style>

<style scoped lang="scss">
@import '../assets/colors.scss';

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.column {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

img {
  display: block;
  width: auto;
  height: auto;
  max-width: 30vw;
  min-width: 20px;
  border-radius: 8px;
  box-shadow: rgba($primary-color, 0.25) 0px 7px 29px 0px;

  transition: box-shadow 0.5s ease-in-out;

  @media screen and (max-width: 1050px) {
    max-width: 45vw;
  }

  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
}

.image {
  margin: 20px 0;
  width: min-content;
  height: min-content;
  cursor: pointer;

  :hover {
    box-shadow: rgba($primary-color, 1) 0px 7px 29px 0px;
  }
}
</style>