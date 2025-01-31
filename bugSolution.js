function foo(a, b) {
  // Handle null values with default values or other suitable logic.
  const numA = a === null ? 0 : a; // Assign 0 if 'a' is null
  const numB = b === null ? 0 : b; // Assign 0 if 'b' is null

  return numA + numB;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0