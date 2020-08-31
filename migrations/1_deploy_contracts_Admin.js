const _Administrateur  = artifacts.require("./Administrateur.sol");

module.exports = function(deployer) {
  deployer.deploy(_Administrateur);
};
