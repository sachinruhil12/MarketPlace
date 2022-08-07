const Marketplace = artifacts.require("marketplace");

module.exports = function (deployer) {
    deployer.deploy(Marketplace);
};
