import { join, normalize } from "node:path";
import { cwd } from "node:process";

export const IMAGES_DIR = process.env.IMAGES_DIR
  ? normalize(process.env.IMAGES_DIR)
  : join(cwd(), "public/images");
export const DATA_DIR = process.env.DATA_DIR
  ? normalize(process.env.DATA_DIR)
  : join(cwd(), "data");
export const FILE_MOUNT = join(DATA_DIR, "tmp");
export const DATABASE_FILE = join(DATA_DIR, "db.sqlite3");
