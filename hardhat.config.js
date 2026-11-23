import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import { defineConfig, task } from "hardhat/config";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/docs/guides/writing-tasks
const accountsTask = task("accounts", "Prints the list of accounts")
  .setInlineAction(async (_taskArgs, hre) => {
    const { ethers } = await hre.network.getOrCreate();
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
      console.log(account.address);
    }
  })
  .build();

// Go to https://hardhat.org/docs/reference/configuration to learn more
export default defineConfig({
  plugins: [hardhatEthers],
  tasks: [accountsTask],
  solidity: "0.8.4",
  paths: {
    artifacts: "./frontend/artifacts",
  },
});
