// pairtree_test.ts
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

import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { decode, encode, join } from "./pairtree.ts";

Deno.test("encode empty string", () => {
  assertEquals(encode(""), "");
});

Deno.test("encode single character", () => {
  assertEquals(encode("a"), "a");
});

Deno.test("encode even length string", () => {
  assertEquals(encode("abcd"), "ab/cd");
});

Deno.test("encode odd length string", () => {
  assertEquals(encode("abcde"), "ab/cd/e");
});

Deno.test("decode empty string", () => {
  assertEquals(decode(""), "");
});

Deno.test("decode single level", () => {
  assertEquals(decode("a"), "a");
});

Deno.test("decode multi level", () => {
  assertEquals(decode("ab/cd/ef"), "abcdef");
});

Deno.test("join base directory with path", () => {
  assertEquals(join("/base", "ab/cd"), "/base/ab/cd");
});
