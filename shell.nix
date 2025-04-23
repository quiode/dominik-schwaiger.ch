{
  mkShell,
  pnpm,
  nodejs_22,
}:
mkShell {
  name = "dominik-schwaiger.ch dev environment";

  packages = [
    pnpm
    nodejs_22
  ];

  shellHook = ''
    export FILE_MOUNT="${builtins.toString ./.}/images/temp"
    export IMAGE_FILES="${builtins.toString ./.}/images"
    pnpm install --shamefully-hoist
  '';
}
