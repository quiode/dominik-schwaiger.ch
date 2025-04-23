<script lang="ts" setup></script>

<template>
  <div id="container">
    <!-- Source: https://codepen.io/yahiarefaiea/pen/YjyZLm -->
    <div id="nuotron">
      <div class="ellipse"></div>
      <div class="dot"></div>
    </div>
    <a id="text" href="https://github.com/quiode/" target="_blank">
      <div class="hover">
        <div>Hover over me to watch</div>
        <div>the magic happening</div>
      </div>
      <div class="website">Click to follow me on GitHub</div>
      <div class="nuotron">Dominik</div>
      <div class="agency">Schwaiger</div>
    </a>
  </div>
</template>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

#container {
  width: 100%;
  height: 100%;
  position: relative;
  direction: ltr;
  text-align: center;
  font-family: 'Muli', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  background-color: #292e43;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

::-moz-selection {
  background-color: rgba(0, 0, 0, 0.21);
  color: #fff;
}

::selection {
  background-color: rgba(0, 0, 0, 0.21);
  color: #fff;
}

::-moz-selection {
  background-color: rgba(0, 0, 0, 0.21);
  color: #fff;
}

#nuotron {
  top: 50%;
  left: 50%;
  width: 84px;
  height: 84px;
  margin-top: -42px;
  margin-left: -42px;
  transform: rotate(45deg);
}

#nuotron,
#nuotron *,
#nuotron *:before {
  display: block;
  position: absolute;
}

#nuotron .ellipse,
#nuotron .dot {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#nuotron .ellipse {
  border: 18px solid #f35635;
  border-radius: 50%;
}

#nuotron .dot {
  -webkit-animation: dotRotate 4.8s linear infinite;
  animation: dotRotate 4.8s linear infinite;
}

#nuotron .dot:before {
  content: '';
  top: -42px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-radius: 50%;
  background-color: #f35635;
  -webkit-animation: dotEffect 1.2s ease-in-out infinite;
  animation: dotEffect 1.2s ease-in-out infinite;
}

@-webkit-keyframes dotEffect {
  50% {
    top: 102px;
  }

  0%,
  50%,
  100% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.5);
  }

  75% {
    transform: scale(1.5);
  }
}

@keyframes dotEffect {
  50% {
    top: 102px;
  }

  0%,
  50%,
  100% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.5);
  }

  75% {
    transform: scale(1.5);
  }
}

@-webkit-keyframes dotRotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dotRotate {
  100% {
    transform: rotate(360deg);
  }
}

#text {
  top: 50%;
  left: 50%;
  width: 182px;
  height: 182px;
  margin-top: -91px;
  margin-left: -91px;
}

#text,
#text>* {
  display: block;
  position: absolute;
  white-space: nowrap;
  transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
}

#text .hover,
#text .website {
  top: 100%;
  left: 50%;
  letter-spacing: 2px;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.63);
}

#text .website {
  margin-top: 28px;
  opacity: 0;
}

#text .nuotron,
#text .agency {
  font-size: 48px;
  font-weight: 800;
  line-height: 182px;
  letter-spacing: 30px;
  color: #fff;
  opacity: 0;
}

#text .nuotron {
  right: 100%;
  margin-right: -34px;
}

#text .agency {
  left: 100%;
}

#text:hover .nuotron,
#text:hover .agency {
  letter-spacing: 14px;
  opacity: 1;
}

#text:hover .nuotron {
  margin-right: -18px;
}

#text:hover .hover {
  margin-top: 28px;
  opacity: 0;
}

#text:hover .website {
  margin-top: 0;
  opacity: 1;
}
</style>
