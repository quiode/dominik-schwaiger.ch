<script lang="ts" setup>
const img = useImage();
const route = useRoute();
const localePath = useLocalePath();

const imageName = route.params.id as string;
const imageIndex = ref(-1);
let columns = ref([[], [], []] as [string[], string[], string[]]);
let images = ref([] as string[]);

getImages()
  .then(data => {
    columns.value = distributeElements(data);
    images.value = data;

    // go to '/gallery' if image name is not a valid image
    if (imageName != '' && !data.includes(imageName)) {
      navigateTo(localePath('/gallery'));
    }

    imageIndex.value = images.value.indexOf(imageName);
  });

onMounted(() => {
  // change body style according to selected image value
  if (imageName == '') {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});

const onSelectImage = (image: string) => {
  navigateTo(localePath(`/gallery/${image}`));
};
const next = (index: number) => {
  const nextImage = images.value[(index + 1) % images.value.length];
  onSelectImage(nextImage);
};
const previous = (index: number) => {
  const nextImage = images.value[index - 1 >= 0 ? index - 1 : images.value.length - 1];
  onSelectImage(nextImage);
};
const close = () => {
  navigateTo(localePath('/gallery'));
};
</script>

<template>
  <div class="gallery" :class="{ slideshow: imageName != '' }">
    <div v-for="column in columns" class="column">
      <div v-for="image in column" class="image-container" @click="onSelectImage(image)">
        <NuxtImg preset="thumbnail" :placeholder="img(imagePath(image), {}, { preset: 'placeholder' })"
          class="image" :src="imagePath(image)" />
      </div>
    </div>
  </div>

  <!-- TODO: instead of changing things here, define routes and get the images from the parameter. hopefully this forces the images library to work! -->
  <ImageSlideShow v-if="imageIndex != -1" :image="images[imageIndex]" @next="next(imageIndex)"
    @previous="previous(imageIndex)" @close="close()"></ImageSlideShow>
</template>

<style scoped lang="scss">
@use '../../assets/colors.scss';

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