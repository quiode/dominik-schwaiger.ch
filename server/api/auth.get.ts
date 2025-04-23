export default defineEventHandler((event) => {
  // if it works, middleware throws no error so no need to return anything
  return "ok";
});
