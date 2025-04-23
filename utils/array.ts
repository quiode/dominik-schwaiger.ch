export function chunkArray<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Size must be greater than zero");

  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

export function distributeElements<T>(inputArray: T[]): [T[], T[], T[]] {
  const array1: T[] = [];
  const array2: T[] = [];
  const array3: T[] = [];

  inputArray.forEach((element, index) => {
    if (index % 3 === 0) {
      array1.push(element);
    } else if (index % 3 === 1) {
      array2.push(element);
    } else {
      array3.push(element);
    }
  });

  return [array1, array2, array3];
}
