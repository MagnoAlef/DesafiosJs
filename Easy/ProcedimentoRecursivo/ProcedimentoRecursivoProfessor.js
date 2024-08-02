function factorial(num) {
  const bigInt = BigInt(num);

  if (bigInt === 0n) return 1n;
  else return bigInt * factorial(bigInt - 1n);
}
