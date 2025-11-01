import React, { useEffect, useState,useMemo } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import {shortenAddress} from "../utils/shortenAddress";

export const TransactionContext = React.createContext();

const { ethereum } = window;

// const getEthereumContract = () => {
//     const provider = new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);
//     console.log({
//         provider,
//         signer,
//         transactionContract
//     });
// }

const getEthereumContract = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return null;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  // console.log(transactionContract.interface.fragments);

  return transactionContract;

  // console.log({
  //   provider,
  //   signer,
  //   transactionContract,
  // });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactions,setTransaction] = useState([]);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };




  
  


  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(account[0]);
      console.log(account);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      // get the data from form.
      const { addressTo, amount, keyword, message } = formData;
      const parsedAmount = ethers.parseEther(amount);
      // now this transactionContract has all the fn of our smartcontract.
      const transactionContract = await getEthereumContract();
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword,
        // {value: parsedAmount}
      );
      setIsLoading(true);
      console.log(`Loading ${transactionHash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success ${transactionHash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(Number(transactionCount));
      console.log(transactionCount);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };






  // useeffect kehta h ki jb bhi app ya page load ho ek baar issey chlao jo fn andr hai or [] zero h mtlb ek baar chlana
  useEffect(() => {
    checkIfWalletIsConnected();
    // checkIfTransactionsExist();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        isLoading,
        transactions
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
