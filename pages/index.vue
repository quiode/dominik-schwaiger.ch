<script lang="ts" setup>
  definePageMeta({
    alias: '/home',
  });
</script>

<template>
  <div id="root">
    <div id="container">
      <img id="avatar" src="/avatar.jpg" />
      <div id="text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo assumenda, quis nam amet
        illum unde consequatur magni quia, excepturi deleniti nulla voluptatum eius iste omnis
        doloremque ea, quasi sunt placeat? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis magnam reiciendis doloribus, molestias expedita ab laboriosam. Dolor alias
        dignissimos porro. Eaque ad enim unde pariatur temporibus nisi quia quos quasi! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Culpa nobis accusamus dolorum? Explicabo,
        veritatis. Deserunt ipsa dicta nesciunt ratione, quisquam debitis hic. Tenetur ipsam maiores
        reprehenderit voluptate, sunt praesentium nam. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Doloribus, tempora non sed et eos aperiam perspiciatis rerum corporis ex
        repudiandae, enim possimus asperiores consequatur ut quo, blanditiis sapiente ullam quia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, ea error voluptate
        doloribus, provident mollitia soluta, ad nam laborum dolorem. Corporis deleniti, delectus
        accusamus vero unde quam doloribus ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eos aliquid facilis quisquam eveniet! Corporis officia quasi fugiat dignissimos alias
        harum nisi amet, iste, voluptate voluptatem eligendi laboriosam esse necessitatibus
        temporibus.
      </div>
    </div>
  </div>
</template>

<style scoped>
  #root {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    #container {
      grid-template-columns: auto !important;
    }

    #avatar {
      width: 100% !important;
    }
  }

  #container {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 5%;
    width: 80%;
    position: relative;
    top: 2.5%;
  }

  #text {
  }

  #avatar {
    position: relative;
    width: 250px;
    object-fit: cover;
  }
</style>
