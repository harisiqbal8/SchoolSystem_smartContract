const { expect } = require("chai");
const { ethers } = require("hardhat");
// const {ethers } = require('ethers');
const { parseEther } = require("ethers/lib/utils");


function fromWei(n){
  return parseEther(n);
}
describe("School Addmission", function () {
  let
    owner, a1, a2, a3, a4, a5, a6,
    addmission;

  it("deploymnet of smart contract : ", async function () {
    [owner, a1, a2, a3, a4, a5, a6] = await ethers.getSigners();
    const Addmission = await ethers.getContractFactory("School");
    addmission = await Addmission.deploy(owner.address);
    await addmission.deployed();
    console.log('school contract address ', addmission.address);
  });
  it("test get function : ", async () => {
    const rollNo = await addmission.getRoll();
    expect(rollNo).to.eq(1);
  });
  it("complete data test function : ", async () => {
    const [name, fname, roll, course, qualification] = await addmission.get(2);
    expect(name).to.eq("");
    expect(fname).to.eq("");
    expect(roll).to.eq(0);
    expect(course).to.eq("");
    expect(qualification).to.eq("");
  });
  it("Student Admission Function : ", async () => {
    await addmission.AddStudent("Ata ur Rehman", "Farooqui", 16, "Computer Systems", "Intermediate", {value: fromWei("2.0")});
    expect(await addmission.getRoll()).to.eq(2);
  });
});