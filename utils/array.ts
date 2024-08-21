export function chunkArray<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Size must be greater than zero");

  const result: T[][] = [];
  
  for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
  }
  
  return result;
}
