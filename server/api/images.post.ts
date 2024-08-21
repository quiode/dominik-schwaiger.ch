import sharp from 'sharp';
import { writeFile, readFile, access, mkdir } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  const { files } = await readBody(event);
  // create files if missing
  await createFiles();

  for (const file of files) {
    const { binaryString } = parseDataUrl(file.content);
    const fileName = uuidv4();

    // get metadata
    // convert image
    const data1 = await sharp(binaryString)
      .webp({ quality: 90 })
      .toFile(full_size + fileName + ".webp");
    // create a thumbnail
    const data2 = await sharp(binaryString)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 60 })
      .toFile(thumbnails + fileName + ".webp");
    // add file to file index
    const json: ImageFile[] = JSON.parse(await readFile(json_file, "utf8"));
    const newJSON: ImageFile[] = [...json, { name: fileName, width: data1.width, height: data1.height, thumbnail_height: data2.height, thumbnail_width: data2.width, format: 'webp' }];
    await writeFile(json_file, JSON.stringify(newJSON), 'utf-8');
  }
});

// Creates the files/folders if they do not already exist
async function createFiles() {
  if (!(await access_wrapper(json_file))) {
    await writeFile(json_file, JSON.stringify([]), 'utf-8');
  }
  if (!(await access_wrapper(full_size))) {
    await mkdir(full_size, { recursive: true });
  }
  if (!(await access_wrapper(thumbnails))) {
    await mkdir(thumbnails, { recursive: true });
  }
}

function access_wrapper(file: string) {
  return access(file).then(() => true, () => false);
}

const thumbnails = process.env.IMAGE_FILES + "thumbnails/";
const full_size = process.env.IMAGE_FILES + "full_size/";
const json_file = process.env.IMAGE_FILES + "images.json";

export interface ImageFile {
  name: string;
  width: number | undefined;
  height: number | undefined;
  thumbnail_width: number | undefined;
  thumbnail_height: number | undefined;
  format: 'webp' | 'jpg'
};
