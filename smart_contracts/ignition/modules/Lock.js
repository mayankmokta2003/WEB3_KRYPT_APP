
const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();
  console.log("Transaction deployed to",transactions.address);

}


const runMain = async () => {
  try{
      await main();
      Process.exit(0); //it means that the process went successfully.
  }catch(error){
    console.log("the error is: ",error);
    process.exit(1);
  }

}

runMain();