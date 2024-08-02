function smallerPairs(pair) {
  const result = [];

  for (let i = 0; i <= pair[0]; i++) {
    for (let j = 0; j <= pair[1]; j++) {
      result.push([i, j]);
    }
  }
  return result;
}

console.log(smallerPairs([2, 2]));
