export default defineEventHandler(async (event) => {
  await createFiles();

  const body = await readBody<ImageDeleteBody>(event);

  await deleteImage(body.id);
});

export interface ImageDeleteBody {
  id: string;
}
