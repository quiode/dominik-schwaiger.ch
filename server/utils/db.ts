export interface ImageFile {
  name: string;
  width: number;
  height: number;
  hash: string; // hash of the original binary string
}

interface BasicSQLResult {
  rows: ImageFile[];
}

const db = useDatabase();

export async function initDatabase() {
  await db.sql`CREATE TABLE IF NOT EXISTS images (name CHAR(36) PRIMARY KEY, width INTEGER NOT NULL, height INTEGER NOT NULL, hash CHAR(64) NOT NULL);`;
}

export async function getImages() {
  return (await db.sql<BasicSQLResult>`SELECT * FROM images;`).rows;
}

export async function saveImage(image: ImageFile) {
  await db.sql`INSERT INTO images VALUES (${image.name}, ${image.width}, ${image.height}, ${image.hash});`;
}

export async function deleteImage(name: string) {
  await db.sql`DELETE FROM images WHERE id=${name};`;
}

export async function getImageByHash(hash: string) {
  return (
    await db.sql<BasicSQLResult>`SELECT * FROM images WHERE hash=${hash};`
  ).rows;
}
