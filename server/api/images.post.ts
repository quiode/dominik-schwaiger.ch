import sharp from 'sharp';
import { writeFile, readFile, rm } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  const { files } = await readBody(event);

  let fileNames: string[] = [];
  for (const file of files) {
    const { binaryString, ext } = parseDataUrl(file.content);
    const fileName = uuidv4();

    // get metadata
    const metadata = await sharp(binaryString)
      .metadata();
    // convert file to a jpg
    await sharp(binaryString)
      .jpeg({ quality: 100 })
      .toFile(full_size + fileName + ".jpg");
    // create a thumbnail
    await sharp(binaryString)
      .resize({ width: 1280, withoutEnlargement: true })
      .jpeg({ quality: 60 })
      .toFile(thumbnails + fileName + ".jpg");
    // add file to file index
    const json: ImageFile[] = JSON.parse(await readFile(json_file, "utf8"));
    const newJSON = [...json, { name: fileName, width: metadata.width, height: metadata.height, size: metadata.size }];
    await writeFile(json_file, JSON.stringify(newJSON), 'utf-8');
  }
});

const temp_files = process.env.FILE_MOUNT;
const thumbnails = process.env.IMAGE_FILES + "thumbnails/";
const full_size = process.env.IMAGE_FILES + "full_size/";
const json_file = process.env.IMAGE_FILES + "images.json";

export interface ImageFile {
  name: string;
  width: number | undefined;
  height: number | undefined;
  size: number | undefined;
};
