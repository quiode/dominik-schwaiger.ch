<script setup lang="ts">
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
} 
</script>

<template>
    <img id="earth" src="/earth.svg">
    <div id="stem">
        <div :style="{left: randomNumber(1,99) + '%', animationDuration: randomNumber(10000,50000) + 'ms', animationDelay: randomNumber(0, 20000) + 'ms'}"
            v-for="_ in 1000" class="light">
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

#earth {
    width: 5vw;
    height: 5vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background-color: $background-color;
}

#stem {
    position: absolute;
    width: 5vw;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;

    animation-timing-function: ease-in;
    animation-duration: 3s;
    animation-name: expand;
    animation-iteration-count: 1;

    overflow: hidden;

    &:hover {

        .light {
            // width: 2px;
            // height: 20px;
            // border-radius: 0px;
            // width: 5px;
            // height: 5px;
            // border-radius: 50%;
            // animation-play-state: paused;
        }
    }
}

.light {
    width: 2px;
    height: 20px;
    border-radius: 0px;
    background-color: $secondary-color;
    // width: 5px;
    // height: 5px;
    // border-radius: 50%;
    position: absolute;
    animation: light ease-in infinite reverse;
    visibility: hidden;

    transition-property: width height border-radius;
    transition-duration: 1s;
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

@keyframes expand {
    0% {
        height: 0%;
    }

    100% {
        height: 100%
    }
}
</style>
