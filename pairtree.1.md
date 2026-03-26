%pairtree(1) user manual | version 0.0.1-alpha 54daec1
% R. S. Doiel
% 2026-03-26

# NAME

pairtree

# SYNOPSIS

pairtree [OPTIONS] encode STRING_TO_ENCODE
pairtree [OPTIONS] decode STRING_TO_DECODE

# DESCRIPTION

pairtree command line interface for working with pairtree encoded
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

pairtree encode this_is_some_sort_of_id
pairtree decode th/is/_i/s_/so/me/_s/or/t_/of/_i/d

~~~

pairtree 0.0.1-alpha


