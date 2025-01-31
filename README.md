# JavaScript Function with Unexpected Null Handling

This repository demonstrates a common, yet subtle bug in JavaScript related to null value handling within functions.  The `foo` function aims to add two numbers but incorrectly returns null if either input is null, regardless of the other input's value. This can lead to unexpected behavior in applications that might rely on null-coalescing or other forms of handling nulls.

## Bug Description
The function `foo` prematurely exits and returns null when either parameter `a` or `b` is null.  A more robust approach would handle nulls separately, ensuring that only when both parameters are null would it return null.

## Bug Solution
The solution involves explicitly checking for null values on each parameter and providing default values or alternative behavior as needed.

## How to Run
1. Clone the repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` for the corrected version.
3. Use Node.js (or a similar JavaScript runtime) to execute each file separately, observing the different outputs.