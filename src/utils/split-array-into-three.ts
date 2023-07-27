export function splitArrayIntoThree(array: Array<any>) {
  const totalChunks = 3;
  const chunkSize = Math.floor(array.length / totalChunks);
  const remainder = array.length % totalChunks;
  const result = [];

  let start = 0;
  for (let i = 0; i < totalChunks; i++) {
    let end = start + chunkSize + (i < remainder ? 1 : 0);
    result.push(array.slice(start, end));
    start = end;
  }

  return result;
}
