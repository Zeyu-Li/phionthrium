// Run with `yarn hardhat run scripts/deploy.js`. Hardhat compiles the contracts
// before running the script.
import { network } from "hardhat";

const { ethers } = await network.getOrCreate();

// We get the contract to deploy
const phionthrium = await ethers.deployContract("Phionthrium");
await phionthrium.waitForDeployment();

console.log("Deployed to:", await phionthrium.getAddress());
