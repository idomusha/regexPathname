const trailingSlashesRegex = /\/+$/;

const trailingSlashUrl =
  "https://codesandbox.io/s//smoosh-bush-zfnz1?file=/src/index.js/";
const trailingSlashesUrl =
  "https://codesandbox.io/s//smoosh-bush-zfnz1?file=/src/index.js///";
const specialCharacterUrl =
  "https://codesandbox.io/s//smoosh-bush-zfnz1?tags=987%2B988";

/**
 * Removes special characters from URL
 * @param {string} path
 */
export function decodePathName(path) {
  return decodeURIComponent(path);
}

/**
 * Cleans URL according to the regular expression
 * @param {string} path
 * @param {RegExp} regex
 */
export function cleanPathName(path, regex) {
  return path.replace(regex, "");
}

console.log(
  "removeTrailingSlashes",
  cleanPathName(trailingSlashUrl, trailingSlashesRegex)
);
console.log(
  "removeTrailingSlashes",
  cleanPathName(trailingSlashesUrl, trailingSlashesRegex)
);
console.log("removeSpecialCharacters", decodePathName(specialCharacterUrl));
