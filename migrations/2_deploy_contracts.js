const Cueva = artifacts.require("Cueva");

module.exports = function (deployer) {
    deployer.deploy(Cueva, 1000000);
};