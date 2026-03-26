// pairtree_test.ts
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
