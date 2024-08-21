import serveStatic from "serve-static";

export default defineNitroPlugin((nitroApp) => {
  if (process.env.IMAGE_FILES) {
    nitroApp.h3App.stack.unshift({
      route: "/images",
      handler: fromNodeMiddleware(serveStatic(process.env.IMAGE_FILES)),
    });
  }
});