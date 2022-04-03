const Cueva = artifacts.require("Cueva");

contract("Cueva", (accounts) => {

    before(async () => {
        cueva = await Cueva.deployed();
    });

    it("Gives the owner of the token 1M tokens", async () => {
        let balance = await cueva.balanceOf(accounts[0]);
        balance = web3.utils.fromWei(balance, 'ether'); //? Wei is the base unit in ETH.
        assert(balance, '1000000', "Balance should be 1M tokens for contract creator");
    });

    it("Can transfer between accounts", async () => {
        let amount = web3.utils.toWei('1000', 'ether');
        await cueva.transfer(accounts[1], amount, { from: accounts[0] });

        let balance = await cueva.balanceOf(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert(balance, '1000', "Balance should be 1K tokens for contract creator");
    })
})