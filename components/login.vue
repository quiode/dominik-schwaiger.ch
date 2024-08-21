<script lang="ts" setup>
const emits = defineEmits({
  authenticated(payload: { password: string }) { }
});

let password = ref('');
let wrong = ref(false);

const passwordSent = () => {
  let finalPassword = password.value;

  $fetch('/api/auth', { params: { password: finalPassword } })
    .then(
      () => emits('authenticated', { password: finalPassword }), () => { wrong.value = true; password.value = '' });
};
</script>

<template>
  <div class="container">
    <h1>{{ $t('password') }}</h1>
    <input :class="{ error: wrong }" v-model="password" type="password" placeholder="admin">
    <button @click="passwordSent" type="button">{{ $t('submit') }}</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    flex-basis: 100%;
    text-align: center;
  }

  input {
    flex-basis: 40%;
    border-color: gray;
    border-style: solid;
    color: inherit;
    background: inherit;
    height: 5em;
  }

  button {
    height: 5em;
    width: 5em;
    border-color: gray;
    color: inherit;
    background: inherit;
    margin-left: 5px;
  }

  .error {
    border-color: red;
  }
}
</style>