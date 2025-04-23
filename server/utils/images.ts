import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import { writeFile, readFile, access, mkdir, rm } from "fs/promises";
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
    const data1 = await sharp(binaryString)
      .keepMetadata()
      .rotate()
      .webp({ quality: 90 })
      .toFile(getImagePath(fileName));
    // add file to file index
    const json = await getJSON();
    const newJSON: ImageFile[] = [
      ...json,
      {
        name: fileName,
        width: data1.width,
        height: data1.height,
        hash: hash,
      },
    ];
    await writeJSON(newJSON);
  }
}

export async function deleteImage(id: string) {
  // remove image from json
  const json = await getJSON();
  const image = json.find((item) => item.name.startsWith(id));

  // only if image exists remove it
  if (image) {
    // remove json
    const filteredJSON = json.filter((item) => !item.name.startsWith(id));
    await writeJSON(filteredJSON);
    // remove image files
    await rm(getImagePath(image.name));
  }
}

// Creates the files/folders if they do not already exist
export async function createFiles() {
  if (!(await access_wrapper(DATA_DIR))) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  if (!(await access_wrapper(IMAGES_DIR))) {
    await mkdir(IMAGES_DIR, { recursive: true });
  }
  if (!(await access_wrapper(JSON_FILE))) {
    writeJSON([] satisfies ImageFile[]);
  }
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
  const json: ImageFile[] = await getJSON();

  return json.some((image) => image.hash == hash);
}

async function getJSON(): Promise<ImageFile[]> {
  return JSON.parse(await readFile(JSON_FILE, "utf8"));
}

async function writeJSON(data: ImageFile[]) {
  await writeFile(JSON_FILE, JSON.stringify(data), "utf-8");
}

function getImagePath(name: string) {
  return join(IMAGES_DIR, name + ".webp");
}
