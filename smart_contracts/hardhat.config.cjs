// https://eth-sepolia.g.alchemy.com/v2/v7d-dX1s6dc-vkI37ZrCl


require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/v7d-dX1s6dc-vkI37ZrCl',
      accounts: [ '84560313bfb53092470ca90a2832b81885f15299efcec912699f18e7917a5cfc' ]
    }

  }
};
