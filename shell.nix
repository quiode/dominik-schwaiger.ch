{
  mkShell,
  nodejs_22,
  sqlitebrowser,
}:
mkShell {
  name = "dominik-schwaiger.ch dev environment";

  packages = [
    nodejs_22
    sqlitebrowser
  ];

  shellHook = ''
    export DATA_DIR="data"
    export IMAGES_DIR="public/images"
    alias push="git switch main && git merge dev --no-ff --no-edit && git push && git switch dev && git push"
    npm install
  '';
}
