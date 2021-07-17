const Multisig = artifacts.require("Multisig");

module.exports = async function(deployer, _network, accounts) {
  await deployer.deploy(Multisig, [accounts[0], accounts[1], accounts[2]], 2);
  const multisig = await Multisig.deployed();
  await web3.eth.sendTransaction({from: accounts[0], to: multisig.address, value: 10000});
};
