<script setup lang="ts">
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
} 
</script>

<template>
    <div id="stem">
        <div :style="{left: randomNumber(1,99) + '%', animationDuration: randomNumber(100,5000) + 'ms', animationDelay: randomNumber(0, 2000) + 'ms'}"
            v-for="_ in 100" class="light">
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

#stem {
    /* From https://css.glass */
    position: absolute;
    width: 5vw;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    background: rgba($primary-color, 0.2);
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba($primary-color, 0.3);

    overflow: hidden;
}

.light {
    width: 1px;
    height: 20px;
    background-color: $secondary-color;
    position: absolute;
    animation: light ease-in infinite;
    visibility: hidden;
}

@keyframes light {
    0% {
        top: 0%;
        transform: translateY(-100%);
        visibility: visible;
    }

    100% {
        top: 100%;
        transform: translateY(+100%);
        visibility: visible;
    }
}
</style>
