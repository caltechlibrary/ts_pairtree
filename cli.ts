// pairtree_cli.ts
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

import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";
import { decode, encode } from "./pairtree.ts";
import { helpText, fmtHelp } from "./helptext.ts";
import { licenseText, releaseDate, releaseHash, version } from "./version.ts";

function main() {
  const appName = "pairtree";
  const args = parse(Deno.args, {
    boolean: ["help", "version", "license"],
    alias: { help: "h", version: "v", license: "l" },
  });

  if (args.help) {
    console.log(fmtHelp(helpText, appName, version, releaseDate, releaseHash));
    Deno.exit(0);
  }

  if (args.license) {
    console.log(licenseText);
    Deno.exit(0);
  }

  if (args.version) {
    console.log(`${appName} ${version} ${releaseDate} ${releaseHash}`);
    Deno.exit(0);
  }

  if (args._.length < 2) {
    console.error("Error: Missing command or string argument.");
    console.log(fmtHelp(helpText, appName, version, releaseDate, releaseHash));
    Deno.exit(1);
  }

  const [command, str] = args._;

  switch (command) {
    case "encode":
      console.log(encode(`${str}`));
      break;
    case "decode":
      console.log(decode(`${str}`));
      break;
    default:
      console.error(`Error: Unknown command "${command}".`);
      console.log(
        fmtHelp(helpText, appName, version, releaseDate, releaseHash),
      );
      Deno.exit(1);
  }
}

if (import.meta.main) {
  main();
}
