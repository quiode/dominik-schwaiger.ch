<script lang="ts" setup></script>

<template>
  <div style="display: flex; justify-content: center">
    <div id="container">
      <h1>{{ $t('contact_adress') }}</h1>
      Dominik Schwaiger
      <br />
      Hofackerstrasse 3
      <br />
      8722 Kaltbrunn, {{ $t('switzerland') }}
      <br />
      E-Mail: <a href="mailto:mail@dominik-schwaiger.ch">mail@dominik-schwaiger.ch</a>

      <h1>{{ $t('disclaimer') }}</h1>
      {{ $t('disclaimer_text') }}

      <h1>{{ $t('link_disclaimer') }}</h1>
      {{ $t('link_disclaimer_text') }}

      <h1>{{ $t('copyright') }}</h1>
      {{ $t('copyright_text_1') }}
      <a href="https://mit-license.org/"><strong>MIT</strong></a> {{ $t('copyright_text_2') }}
      <br />
      <footer style="margin-top: 5%">
        {{ $t('source') }}
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container {
  width: 50%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
}
</style>
