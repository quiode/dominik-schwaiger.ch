<script lang="ts" setup>
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = "pdf.worker.bundle.js"
const pdfLoadingTask = pdfjsLib.getDocument('CV.pdf');

const pdf = await pdfLoadingTask.promise;
const pages = pdf.numPages;

for (let i = 1; i <= pages; i++) {
  pdf.getPage(i).then(page => {
    console.log('Page loaded');

    let scale = 1.5;
    let viewport = page.getViewport({ scale: scale });

    // Prepare canvas using PDF page dimensions
    let canvas = document.getElementById('the-canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d')!;
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    let renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    let renderTask = page.render(renderContext);
    renderTask.promise.then(function () {
      console.log('Page rendered');
    });
  });
}
</script>

<template>
  <canvas id="the-canvas"></canvas>
</template>

<style scoped lang="scss"></style>