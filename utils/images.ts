const BASE_URL = import.meta.dev
  ? "http://localhost:3000"
  : "https://dominik-schwaiger.ch";

export function imagePath(name: string) {
  return `/images/${name}.webp`;
}
export function imageJsonPath() {
  return `/api/images`;
}

let images = undefined as string[] | undefined;

export async function getImages() {
  if (images) {
    return images;
  } else {
    return $fetch<ImageFile[]>(imageJsonPath())
      .then((data) => data.map((image) => image.name))
      .then((data) => data.sort())
      .then((data) => data.reverse())
      .then((data) => (images = data));
  }
}
