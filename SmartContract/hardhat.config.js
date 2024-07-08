
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "scrollSepolia",
  networks:{
    hardhat:{},
    scrollSepolia: {
      url: "https://avalanche-fuji.blockpi.network/v1/rpc/public",
      chainId: 43113,
      accounts: ['311781ddca1fafb1df9e2e886028418084e273e58e6f1b45ba86dec7d4e6038e']
    },
  }
};
