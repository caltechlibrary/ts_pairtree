/**
 * helptext.go holds the common help docuemntation
 */
export const
	helpText = `%{app_name}(1) user manual | version {version} {release_hash}
% R. S. Doiel
% {release_date}

# NAME

{app_name}

# SYNOPSIS

{app_name} [OPTIONS] encode STRING_TO_ENCODE
{app_name} [OPTIONS] decode STRING_TO_DECODE

# DESCRIPTION

{app_name} command line interface for working with pairtree encoded
UTF-8 strings. Pairtree paths are used by libraries and archives for
in the directory layout of digital objects.

# OPTIONS

-help
: display help

-license
: display license

-version
: display version

# EXAMPLES

Encode "this_is_some_sort_of_id" and then decode the resulting value.
~~~

{app_name} encode this_is_some_sort_of_id
{app_name} decode th/is/_i/s_/so/me/_s/or/t_/of/_i/d

~~~

{app_name} {version}

`

/**
 * FmtHelp processes a text block with simple curly brace markup.
 * @param src The source text with placeholders.
 * @param appName The application name to replace {app_name}.
 * @param version The version to replace {version}.
 * @param releaseDate The release date to replace {release_date}.
 * @param releaseHash The release hash to replace {release_hash}.
 * @returns The processed text with placeholders replaced.
 */
export function fmtHelp(
  src: string,
  appName: string,
  version: string,
  releaseDate: string,
  releaseHash: string,
): string {
  const replacements: Record<string, string> = {
    "{app_name}": appName,
    "{version}": version,
    "{release_date}": releaseDate,
    "{release_hash}": releaseHash,
  };

  for (const [key, value] of Object.entries(replacements)) {
    if (src.includes(key)) {
      src = src.split(key).join(value);
    }
  }

  return src;
}
