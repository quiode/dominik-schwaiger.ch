import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import { access, mkdir, rm } from "fs/promises";
import { hash } from "crypto";
import { join } from "path";

// TODO: concurrency problems could occur with json if one thread safes an old value. Should not occur if one normally only uploads and deletes not concurrent, but synchronization would be beneficial

export async function uploadImage(binaryString: Buffer) {
  const hash = hashBuffer(binaryString);

  // only upload image if it hasn't been already uploaded
  if (!(await imageExists(hash))) {
    const fileName = uuidv4();
    // get metadata
    // convert image
    const data = await sharp(binaryString)
      .keepMetadata()
      .rotate()
      .webp({ quality: 90 })
      .toFile(getImagePath(fileName));
    // save to db
    await saveImage({
      name: fileName,
      width: data.width,
      height: data.height,
      hash: hash,
    });
  }
}

export async function removeImage(id: string) {
  await deleteImage(id);
  // remove image files
  await rm(getImagePath(id));
}

// Creates the files/folders if they do not already exist
export async function createFiles() {
  if (!(await access_wrapper(DATA_DIR))) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  if (!(await access_wrapper(IMAGES_DIR))) {
    await mkdir(IMAGES_DIR, { recursive: true });
  }
  initDatabase();
}

function access_wrapper(file: string) {
  return access(file).then(
    () => true,
    () => false
  );
}

function hashBuffer(buffer: Buffer) {
  return hash("sha256", buffer);
}

async function imageExists(hash: string) {
  const matches = await getImageByHash(hash);

  return matches.length > 0;
}

function getImagePath(name: string) {
  return join(IMAGES_DIR, name + ".webp");
}
