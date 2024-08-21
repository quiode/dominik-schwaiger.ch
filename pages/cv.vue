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
        const viewport = page.getViewport({ scale: 2 });

        // Prepare canvas using PDF page dimensions
        const canvas = document.getElementById('canvas-' + i) as HTMLCanvasElement;
        const context = canvas.getContext('2d')!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          console.log('Page rendered');
        });
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