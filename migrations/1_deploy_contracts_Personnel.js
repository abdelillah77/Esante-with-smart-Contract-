const _PersonnelSante  = artifacts.require("./PersonnelSante.sol");

module.exports = function(deployer) {
  deployer.deploy(_PersonnelSante);
};
