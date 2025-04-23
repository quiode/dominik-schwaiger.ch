const BASE_URL = import.meta.dev
  ? "http://localhost:3000"
  : "https://dominik-schwaiger.ch";

export function imagePath(name: string) {
  return `/images/${name}.webp`;
}
export function imageJsonPath() {
  return `/images/images.json`;
}
