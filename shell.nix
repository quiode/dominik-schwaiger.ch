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
    export DATA_DIR="public/images"
    alias push="git switch main && git merge dev --no-ff --no-edit && git switch dev"
    npm install
  '';
}
