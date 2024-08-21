import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import { writeFile, readFile, access, mkdir, rm } from 'fs/promises';

// TODO: concurrency problems could occur with json if one thread safes an old value. Should not occur if one normally only uploads and deletes not concurrent, but synchronization would be beneficial

export async function uploadImage(binaryString: Buffer) {
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

export async function deleteImage(id: string) {
  // remove image from json
  const json: ImageFile[] = JSON.parse(await readFile(json_file, "utf8"));
  const image = json.find(item => item.name.startsWith(id));

  // only if image exists remove it
  if (image) {
    // remove json
    const filteredJSON = json.filter(item => !item.name.startsWith(id));
    await writeFile(json_file, JSON.stringify(filteredJSON), 'utf-8');
    // remove image files
    await rm(full_size + image.name + '.' + image.format);
    await rm(thumbnails + image.name + '.' + image.format);
  }
}

// Creates the files/folders if they do not already exist
export async function createFiles() {
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

// CONSTANTS AND INTERFACES
export const thumbnails = process.env.IMAGE_FILES + "thumbnails/";
export const full_size = process.env.IMAGE_FILES + "full_size/";
export const json_file = process.env.IMAGE_FILES + "images.json";

export interface ImageFile {
  name: string;
  width: number | undefined;
  height: number | undefined;
  thumbnail_width: number | undefined;
  thumbnail_height: number | undefined;
  format: 'webp' | 'jpg'
};