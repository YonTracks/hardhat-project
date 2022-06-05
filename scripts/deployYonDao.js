
const hre = require("hardhat");

async function main() {
 
  const YonDao = await hre.ethers.getContractFactory("YonDao");
  const yonDao = await YonDao.deploy();

  await yonDao.deployed();

  console.log("YonDao deployed to:", yonDao.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
