<script lang="ts" setup>
import * as pdfjsLib from 'pdfjs-dist';

let pages = ref(0);
let pdf = null as pdfjsLib.PDFDocumentProxy | null;

if (import.meta.client) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`
  const pdfLoadingTask = pdfjsLib.getDocument(window.location.origin + '/CV.pdf');

  pdf = await pdfLoadingTask.promise;
  pages.value = pdf.numPages;
}

onMounted(() => {
  if (pdf) {
    for (let i = 1; i <= pages.value; i++) {
      pdf.getPage(i).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale, });
        // Support HiDPI-screens.
        const outputScale = window.devicePixelRatio || 1;

        const canvas = document.getElementById('canvas-' + i) as HTMLCanvasElement;
        const context = canvas.getContext('2d')!;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        const transform = outputScale !== 1
          ? [outputScale, 0, 0, outputScale, 0, 0]
          : undefined;

        const renderContext = {
          canvasContext: context,
          transform: transform,
          viewport: viewport
        };
        page.render(renderContext);
      });
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="inner-container">
      <canvas v-for="i in pages" :id="'canvas-' + i"></canvas>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.inner-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>