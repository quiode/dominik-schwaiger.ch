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
      default = pkgsFor.${system}.callPackage ./shell.nix {};
    });
  };
}
