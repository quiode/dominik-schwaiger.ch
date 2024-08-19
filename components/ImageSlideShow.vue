<script lang="ts" setup>
import type { ImageFile } from '../server/api/images.post';

defineProps<{
  images: ImageFile[],
  index: number
}>();

const emit = defineEmits(['close']);

onMounted(() => {
  window.addEventListener('keydown', onKeyDown);
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown);
});

function onKeyDown(event: KeyboardEvent) {
  if (event.key == 'Escape') {
    emit('close');
  }
};
</script>

<template>
</template>

<style lang="scss" scoped></style>
