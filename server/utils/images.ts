import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import { writeFile, readFile, access, mkdir, rm } from 'fs/promises';
import { hash } from 'crypto';

// TODO: concurrency problems could occur with json if one thread safes an old value. Should not occur if one normally only uploads and deletes not concurrent, but synchronization would be beneficial

export async function uploadImage(binaryString: Buffer) {
  const hash = hashBuffer(binaryString);

  // only upload image if it hasn't been already uploaded
  
  if (!(await imageExists(hash))) {
    const fileName = uuidv4();
    // get metadata
    // convert image
    const data1 = await sharp(binaryString)
      .keepMetadata()
      .webp({ quality: 90 })
      .toFile(full_size + fileName + ".webp");
    // create a thumbnail
    const data2 = await sharp(binaryString)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 60 })
      .toFile(thumbnails + fileName + ".webp");
    // add file to file index
    const json = await getJSON();
    const newJSON = [...json, { name: fileName, width: data1.width, height: data1.height, thumbnail_height: data2.height, thumbnail_width: data2.width, format: 'webp' as 'webp', hash: hash }];
    await writeJSON(newJSON);
  }
}

export async function deleteImage(id: string) {
  // remove image from json
  const json = await getJSON();
  const image = json.find(item => item.name.startsWith(id));

  // only if image exists remove it
  if (image) {
    // remove json
    const filteredJSON = json.filter(item => !item.name.startsWith(id));
    await writeJSON(filteredJSON);
    // remove image files
    await rm(full_size + image.name + '.' + image.format);
    await rm(thumbnails + image.name + '.' + image.format);
  }
}

// Creates the files/folders if they do not already exist
export async function createFiles() {
  if (!(await access_wrapper(json_file))) {
    writeJSON([]);
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

function hashBuffer(buffer: Buffer) {
  return hash('sha256', buffer);
}

async function imageExists(hash: string) {
  const json: ImageFile[] = await getJSON();

  return json.some(image => image.hash == hash);
}

async function getJSON(): Promise<ImageFile[]> {
  return JSON.parse(await readFile(json_file, "utf8"));
}

async function writeJSON(data: ImageFile[]) {
  await writeFile(json_file, JSON.stringify(data), 'utf-8');
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
  format: 'webp' | 'jpg',
  hash: string // hash of the original binary string
};