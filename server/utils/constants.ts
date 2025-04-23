import { join, normalize } from "node:path";
import { cwd } from "node:process";

export const DATA_DIR = process.env.DATA_DIR
  ? normalize(process.env.DATA_DIR)
  : join(cwd(), "data");
export const FILE_MOUNT = join(DATA_DIR, "tmp");
export const IMAGES_DIR = join(DATA_DIR, "images");
export const JSON_FILE = join(IMAGES_DIR, "images.json");