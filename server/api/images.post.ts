export default defineEventHandler(async (event) => {
  const { files } = await readBody(event);
  // create files if missing
  await createFiles();

  for (const file of files) {
    const { binaryString } = parseDataUrl(file.content);

    await uploadImage(binaryString);
  }
});
