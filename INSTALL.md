Installation for development of **ts_pairtree**
===========================================

**ts_pairtree** A pairtree implementation for TypeScript. It is based on Caltech Library's the pairtree implementation in Go provided at https://github.com/caltechlibrary/pairtree.

Quick install with curl or irm
------------------------------

There is an experimental installer.sh script that can be run with the following command to install latest table release. This may work for macOS, Linux and if you’re using Windows with the Unix subsystem. This would be run from your shell (e.g. Terminal on macOS).

~~~shell
curl https://caltechlibrary.github.io/ts_pairtree/installer.sh | sh
~~~

This will install the programs included in ts_pairtree in your `$HOME/bin` directory.

If you are running Windows 10 or 11 use the Powershell command below.

~~~ps1
irm https://caltechlibrary.github.io/ts_pairtree/installer.ps1 | iex
~~~

### If your are running macOS or Windows

You may get security warnings if you are using macOS or Windows. See the notes for the specific operating system you're using to fix issues.

- [INSTALL_NOTES_macOS.md](INSTALL_NOTES_macOS.md)
- [INSTALL_NOTES_Windows.md](INSTALL_NOTES_Windows.md)

Installing from source
----------------------

### Required software

- Deno

### Steps

1. git clone https://github.com/caltechlibrary/ts_pairtree
2. Change directory into the `ts_pairtree` directory
3. Make to build, test and install

~~~shell
git clone https://github.com/caltechlibrary/ts_pairtree
cd ts_pairtree
make
make test
make install
~~~

