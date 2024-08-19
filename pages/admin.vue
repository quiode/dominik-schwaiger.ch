<script lang="ts" setup>
const { handleFileInput, files } = useFileStorage()

let password = ref('admin');

const submit = async () => {
  const response = await $fetch('/api/images', {
    method: 'POST',
    body: {
      files: files.value
    },
    params: {
      password: password.value
    }
  }).catch(error => alert(error))
    .then(() => { navigateTo('/gallery'); });
}
</script>

<template>
  <Login v-if="password == ''" @authenticated="password = $event.password"></Login>
  <div v-else class="container">
    <div class="inner-container">
      <input type="file" multiple @input="handleFileInput" />
      <button @click="submit">submit</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.inner-container {
  margin: 10em;
}
</style>