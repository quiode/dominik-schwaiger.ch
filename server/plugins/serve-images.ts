import serveStatic from "serve-static";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.h3App.stack.unshift({
    route: "/images",
    handler: fromNodeMiddleware(
      serveStatic(IMAGES_DIR, { immutable: true, maxAge: 31536000 })
    ),
  });
});
