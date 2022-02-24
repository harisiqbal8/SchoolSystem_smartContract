const hre = require("hardhat");
const add = process.env.MY_ADDRESS;
async function main() {
  const Addmission = await ethers.getContractFactory("School");
    const addmission = await Addmission.deploy(owner.address );
    await addmission.deployed();
    console.log('school contract address ',addmission.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
