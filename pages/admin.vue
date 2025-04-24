<script lang="ts" setup>
import { validate } from 'uuid';
import type { ImageDeleteBody } from '~/server/api/admin/images.delete';
import type { ImageFile } from '~/server/utils/db';

defineRouteRules({
  robots: false,
});

const { handleFileInput, files } = useFileStorage()

let password = ref('');
let deleteId = ref('');
let validId = ref(false);

// check if id is a valid uuid
watch(deleteId, newId => validId.value = validate(newId));

async function submit() {
  await Promise.all(files.value.map(image =>
    $fetch('/api/admin/images', {
      method: 'POST',
      retry: 3,
      body: {
        files: [image]
      },
      params: {
        password: password.value
      }
    }).catch(error => {
      return Promise.reject({
        error: error,
        image: image
      });
    })
  ))
    .then(
      () => alert('Done!'),
      (error: { error: any, image: ImageFile }) => {
        alert("An error has occured! (see logs)");
        console.error("Error while trying to save an image: ", error);
      }
    );
}

async function deleteImage(id: string) {
  await $fetch('/api/admin/images', {
    method: 'DELETE',
    body: {
      id: id
    } satisfies ImageDeleteBody,
    params: {
      password: password.value
    }
  }).then(
    () => alert('Done!'),
    (error) => {
      alert("An error has occured! (see logs)");
      console.error("Error while trying to delete an image: ", error);
    }
  );
}
</script>

<template>
  <Login v-if="password == ''" @authenticated="password = $event.password"></Login>
  <div v-else>
    <div class="container">
      <div class="inner-container">
        <input type="file" multiple @input="handleFileInput" />
        <button :disabled="files.length == 0" @click="submit">{{ $t('submit') }}</button>
      </div>
    </div>
    <div class="container">
      <div class="inner-container">
        <input placeholder="id-to-delete" class="text-input" v-model="deleteId" type="text" />
        <button @click="deleteImage(deleteId)" :disabled="!validId">{{ $t('submit') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.inner-container {
  margin: 5em;
}

.text-input {
  margin-right: 5em;
}
</style>