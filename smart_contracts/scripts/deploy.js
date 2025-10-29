
// const main = async () => {
//     const Transactions = await hre.ethers.getContractFactory("Transactions");
//     const transactions = await Transactions.deploy();
  
//     // await transactions.deployed();
//     await transactions.waitForDeployment();


//     console.log("Transaction deployed to",transactions.address);
  
//   }
  
//   const runMain = async () => {
//     try{
//         await main();
//         process.exit(0); //it means that the process went successfully.
//     }catch(error){
//       console.log("the error is: ",error);
//       process.exit(1);
//     }
  
//   }
  
//   runMain();






const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.waitForDeployment();
  const address = await transactions.getAddress();
  console.log("Transaction deployed to:", address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("the error is:", error);
    process.exit(1);
  }
};

runMain();
