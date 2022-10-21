export default function generateShuffledIndices(size: number): number[] {
  const indices: number[] = [...Array(size).keys()];
  console.log(indices);

  for (var i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices;
}
