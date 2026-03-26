

# ts_pairtree

A pairtree implementation for TypeScript. It is based on Caltech Library's the pairtree implementation in Go provided at https://github.com/caltechlibrary/pairtree.

This is a library for translate a UTF-8 string to/from a pairtree. It is based on the Go [pairtree](https://caltechlibrary.github.io/pairtree) module developed at Caltech Library.
notation. This is typically used in storing things on disc (e.g. repository filesystems). This code is based on the specification found at https://confluence.ucop.edu/download/attachments/14254128/PairtreeSpec.pdf?version=2&modificationDate=1295552323000&api=v2 which is cited on the [OCFL](https://github.com/OCFL/spec/wiki) wiki.

## Example

Initial port of the Go pairtree code to TypeScript.

~~~typescript
import * as pairtree from 'https://caltechlibrary.github.io/ts_pairtree/mod.ts';

let key = "12mIEERD11";
console.log(`Key: ${key}`);
let pairPath := pairtree.encode(key)
console.log(`Endoded key "${key}" -> "${pairPath}"`);
key = pairtree.decode(pairPath)
console.log(`Decoded path "${pairtreePath}" -> "${key}"`);
~~~

## Release Notes

Initial port of the Go pairtree code to TypeScript.

- version: 0.0.1-alpha
- status: WIP
- released: 2026-03-26

### Authors

- Doiel, R. S.

## Software Requirements

- Deno


#### Runtime platform

**- Deno**

## Related resources

- [Getting Help, Reporting bugs](https://github.com/caltechlibrary/ts_pairtree/issues)
- [LICENSE](https://caltechlibrary.github.io/ts_pairtree/LICENSE)
- [Installation](INSTALL.md)
- [About](about.md)
