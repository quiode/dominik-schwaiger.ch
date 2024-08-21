<script lang="ts" setup>
import { validate } from 'uuid';
import type { ImageDeleteBody } from '~/server/api/images.delete';

const { handleFileInput, files } = useFileStorage()

let password = ref('');
let deleteId = ref('');
let validId = ref(false);

// check if id is a valid uuid
watch(deleteId, newId => validId.value = validate(newId));

async function submit() {
  const chunks = chunkArray(files.value, 2);

  for (let chunk of chunks) {
    await $fetch('/api/images', {
      method: 'POST',
      body: {
        files: chunk
      },
      params: {
        password: password.value
      }
    }).catch((error) => { alert(error); });
  }

  alert('done!');
}

async function deleteImage(id: string) {
  await $fetch('/api/images', {
    method: 'DELETE',
    body: {
      id: id
    } satisfies ImageDeleteBody,
    params: {
      password: password.value
    }
  }).catch((error) => { alert(error); });

  alert('done');
}
</script>

<template>
  <Login v-if="password == ''" @authenticated="password = $event.password"></Login>
  <div v-else>
    <div class="container">
      <div class="inner-container">
        <input type="file" multiple @input="handleFileInput" />
        <button :disabled="files.length == 0" @click="submit">submit</button>
      </div>
    </div>
    <div class="container">
      <div class="inner-container">
        <input placeholder="id-to-delete" class="text-input" v-model="deleteId" type="text" />
        <button @click="deleteImage(deleteId)" :disabled="!validId">submit</button>
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