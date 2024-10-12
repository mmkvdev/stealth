/**
 * Problem: Rebuild a Message from Parts
 * You need to implement a function rebuildMessage(parts) which takes an array of strings (parts) as input and returns the rebuilt message.

    Details:
        * The message was cut into several parts, and you are given these parts in the parts array.
        * You need to reconstitute the original message by following specific rules to determine how the parts fit together.
        Rules for Rebuilding the Message:
            The message always starts with the character 'A' and ends with the character 'Z'.
            The parts overlap: When combining two parts, the last character of the first part corresponds to the first character of the second part. You must not include this overlapping character twice.
            For example, combining the two parts:
            'A---b' and 'b---Z' should result in 'A---b---Z' (without the duplicate 'b').
            The function must return the complete rebuilt message.
            Constraints:
            The first characters of all parts are unique (i.e., no two parts will start with the same character).
            Each part has at least 2 characters and at most 1000 characters.
            The solution is guaranteed to exist and will be unique.
            The parts array is never null, contains at least one element, and has at most 100 parts.
 */

// solution
function rebuildMessage(parts) {
  const messagePartMapStore = new Map();
  let firstPartOfTheRebuiltMessage = null;

  for (const part of parts) {
    messagePartMapStore.set(part[0], part);
    if (part[0] === "A") {
      firstPartOfTheRebuiltMessage = part;
    }
  }

  let rebuiltMessage = firstPartOfTheRebuiltMessage;
  let currentPart = firstPartOfTheRebuiltMessage;

  while (currentPart[currentPart.length - 1] !== "Z") {
    const nextPart = messagePartMapStore.get(
      currentPart[currentPart.length - 1]
    );
    rebuiltMessage += nextPart.slice(1);
    currentPart = nextPart;
  }

  return rebuiltMessage;
}

// Test Case 1
let parts1 = ["A---b", "b---Z"];
console.log(rebuildMessage(parts1)); // Output: "A---b---Z"

// Test Case 2
let parts2 = ["A---x", "x---y", "y---z", "z---Z"];
console.log(rebuildMessage(parts2)); // Output: "A---x---y---z---Z"

// Test Case 3
let parts3 = ["A-", "-B-", "-C-", "-D-", "-E-", "-Z"];
console.log(rebuildMessage(parts3)); // Output: "A-B-C-D-E-Z"

// Test Case 4
let parts4 = ["m---Z", "A---b", "b---c", "c---m"];
console.log(rebuildMessage(parts4)); // Output: "A---b---c---m---Z"

// Test Case 5
let parts5 = ["A long start", "t middle part", "part endZ"];
console.log(rebuildMessage(parts5)); // Output: "A long start middle part endZ"

// Test Case 6
let parts6 = ["A---Z"];
console.log(rebuildMessage(parts6)); // Output: "A---Z"

// Test Case 7
let parts7 = ["Aaaaaaaa", "aaaaaaaZ"];
console.log(rebuildMessage(parts7)); // Output: "AaaaaaaaZ"

// Test Case 8
let parts8 = ["A", "Z"];
console.log(rebuildMessage(parts8)); // Output: "AZ"
