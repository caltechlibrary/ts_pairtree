// pairtree.ts
// Implements encoding/decoding of object identifiers and pairtree paths per PairtreeSpec.
//
//
// Copyright (c) 2026, Caltech
// All rights not granted herein are expressly reserved by Caltech.
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

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
