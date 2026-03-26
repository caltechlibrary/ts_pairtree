// pairtree.ts
// Implements encoding/decoding of object identifiers and pairtree paths per PairtreeSpec.

/**
 * Encodes a string into a pairtree path.
 * @param id The object identifier to encode.
 * @returns The pairtree path.
 */
export function encode(id: string): string {
  if (id.length === 0) {
    return "";
  }
  let path = "";
  for (let i = 0; i < id.length; i += 2) {
    const pair = id.slice(i, i + 2);
    if (pair.length === 1) {
      path += `${pair}/`;
    } else {
      path += `${pair}/`;
    }
  }
  return path.slice(0, -1); // Remove trailing slash
}

/**
 * Decodes a pairtree path into an object identifier.
 * @param path The pairtree path to decode.
 * @returns The object identifier.
 */
export function decode(path: string): string {
  return path.replace(/\//g, "");
}

/**
 * Joins a base directory with a pairtree path.
 * @param baseDir The base directory.
 * @param path The pairtree path.
 * @returns The full path.
 */
export function join(baseDir: string, path: string): string {
  return `${baseDir}/${path}`;
}
