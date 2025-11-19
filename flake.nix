{
  description = "dominik-schwaiger.ch dev environment";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default-linux";
  };

  outputs = inputs: let
    eachSystem = inputs.nixpkgs.lib.genAttrs (import inputs.systems);
    pkgsFor = inputs.nixpkgs.legacyPackages;
  in {
    devShells = eachSystem (system: {
      default = with pkgsFor.${system};
        mkShellNoCC {
          packages = [
            nodejs_22
            sqlitebrowser
            docker
          ];

          # Environment Variables
          DATA_DIR = "data";
          IMAGES_DIR = "public/images";

          shellHook = ''
            alias push="git switch main && git merge dev --no-ff --no-edit && git push && git switch dev && git push"
            npm install
          '';
        };
    });
  };
}
