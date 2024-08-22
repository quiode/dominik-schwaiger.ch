<script lang="ts" setup>
import * as pdfjsLib from 'pdfjs-dist';

let pages = ref(0);
let pdf = null as pdfjsLib.PDFDocumentProxy | null;
let renders = [] as (Promise<any> | null)[];

if (import.meta.client) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`
  const pdfLoadingTask = pdfjsLib.getDocument(window.location.origin + '/CV.pdf');

  pdf = await pdfLoadingTask.promise;
  pages.value = pdf.numPages;

  for (let index = 0; index <= pages.value; index++) {
    renders.push(null);
  }
}

onMounted(() => {
  renderPages();

  window.addEventListener('resize', renderPages);
});

onUnmounted(() => {
  window.removeEventListener('resize', renderPages);
});

const renderPages = () => {
  if (pdf) {
    for (let i = 1; i <= pages.value; i++) {
      pdf.getPage(i).then(async page => {
        const viewport = page.getViewport({ scale: 6 });

        // Prepare canvas using PDF page dimensions
        const canvas = document.getElementById('canvas-' + i) as HTMLCanvasElement;
        const context = canvas.getContext('2d')!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        if (renders[i]) {
          await renders[i];
        }
        page.render(renderContext);
      });
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="inner-container">
      <canvas v-for="i in pages" :id="'canvas-' + i"></canvas>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.container {
  display: flex;
  justify-content: center;
}

.inner-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 1em;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

canvas {
  border-radius: 10px;
  border: 3px $primary-color solid;
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: white 0px 0px 14px;
  }
}
</style>