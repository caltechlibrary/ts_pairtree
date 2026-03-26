
TS Pairtree
===========

This is a library for translate a UTF-8 string to/from a pairtree. It is based on the Go [pairtree](https://caltechlibrary.github.io/pairtree) module developed at Caltech Library.
notation. This is typically used in storing things on disc (e.g. repository filesystems). This code is based on the specification found at https://confluence.ucop.edu/download/attachments/14254128/PairtreeSpec.pdf?version=2&modificationDate=1295552323000&api=v2 which is cited on the [OCFL](https://github.com/OCFL/spec/wiki) wiki.


Features
--------

- `encode()` will encode the provided string as a pairtree path
- `decode()` will decode a pairtree path returning the unencoded string

Example
-------

```
  import * as pairtree from 'https://caltechlibrary.github.io/ts_pairtree/mod.ts';

   let key = "12mIEERD11";
   console.log(`Key: ${key}`);
   let pairPath := pairtree.encode(key)
   console.log(`Endoded key "${key}" -> "${pairPath}"`);
   key = pairtree.decode(pairPath)
   console.log(`Decoded path "${pairtreePath}" -> "${key}"`);
```
