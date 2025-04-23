<script lang="ts" setup>
const img = useImage()
let selectedImage = ref(undefined as undefined | number);
let columns = ref([[], [], []] as [ImageFile[], ImageFile[], ImageFile[]]);
let images = ref([] as ImageFile[]);

$fetch<ImageFile[]>(imageJsonPath())
  .then(data => data.reverse())
  .then(data => {
    columns.value = distributeElements(data);
    images.value = data;
  });

function onSelectImage(image: ImageFile) {
  const index = images.value.indexOf(image);
  selectedImage.value = index;
}

// change body style according to selected image value
watch(selectedImage, value => {
  if (value != undefined) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="gallery" :class="{ slideshow: selectedImage != undefined }">
    <div v-for="column in columns" class="column">
      <div v-for="image in column" class="image-container" @click="onSelectImage(image)">
        <NuxtImg preset="thumbnail" :placeholder="[500, 500, 10, 20]" class="image" :src="imagePath(image.name)" />
      </div>
    </div>
  </div>

  <ImageSlideShow v-if="selectedImage != undefined" :image="images[selectedImage]"
    @next="selectedImage = (selectedImage + 1) % images.length"
    @previous="selectedImage = selectedImage - 1 >= 0 ? selectedImage - 1 : images.length - 1"
    @close="selectedImage = undefined"></ImageSlideShow>
</template>

<style scoped lang="scss">
@use '../assets/colors.scss';

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.slideshow {
  pointer-events: none;
  overflow: hidden;
}

.column {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

.image {
  display: block;
  width: auto;
  height: auto;
  max-width: 30vw;
  min-width: 20px;
  border-radius: 8px;
  box-shadow: rgba(colors.$primary-color, 0.25) 0px 7px 29px 0px;

  transition: box-shadow 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
}

.image-container {
  margin: 20px 0;
  width: min-content;
  height: min-content;
  cursor: pointer;

  :hover {
    box-shadow: rgba(colors.$primary-color, 1) 0px 7px 29px 0px;
  }
}
</style>