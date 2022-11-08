<script setup lang="ts">

</script>

<template>
    <div id="stem-container">
        <div id="stem-color"></div>
        <div id="stem"></div>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

$border: 10px;
$box-height: 100vw;
$stem_width: 100px;
$grow_duration: 5s;

#stem-container {
    height: $box-height;
    width: $border;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    animation: grow $grow_duration forwards ease-out, stretch 2s calc($grow_duration * 0.75) forwards ease-out;
}

#stem {
    width: calc(100% - $border);
    height: calc(100% - $border);
    background-color: $background-color;
    top: calc($border / 2);
    left: calc($border / 2);
    position: absolute;
    border-radius: 5px;
}

#stem-color {
    animation: rotation 5s linear infinite both;
    height: calc($box-height * 2);
    aspect-ratio: 1/1;
    background-image: $gradient-light-top;
    top: 50%;
    left: 50%;
    position: absolute;
}

@keyframes rotation {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes grow {
    0% {
        height: 0%;
    }

    100% {
        height: $box-height;
    }
}

@keyframes stretch {
    0% {
        width: $border;
    }

    100% {
        width: $stem_width;
    }
}
</style>
