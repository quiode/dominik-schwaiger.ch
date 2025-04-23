{
  mkShell,
  pnpm,
  nodejs_20,
}:
mkShell {
  name = "dominik-schwaiger.ch dev environment";

  packages = [
    pnpm
    nodejs_20
  ];

  shellHook = ''
    pnpm install --shamefully-hoist
  '';
}
