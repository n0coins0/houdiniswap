"use client";
import { useState } from "react";
import swap from "./assets/swap.svg";
import Image from "next/image";
import plus from "./assets/plus.png";
import { useSearchParams } from "next/navigation";

export default function Page() {
  // State variables for the form inputs
  const [singleChecked, setSingleChecked] = useState(false);
  const [privateOption, setPrivateOption] = useState("Private");
  const [exactOption, setExactOption] = useState("Variable");
  const [sendAmount, setSendAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [accountId, setAccountId] = useState("");

  // Event handlers for form inputs
  const handleSendAmountChange = (e) => {
    setSendAmount(e.target.value);
  };

  const handleAccountIdFocus = () => {
    if (accountId === "000000") {
      setAccountId("");
    }
  };
  const handleReceiveAmountChange = (e) => {
    setReceiveAmount(e.target.value);
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleLowerFeesButtonClick = () => {
    setShowPopup(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    if (!sendAmount || !walletAddress) {
      alert("Please input the amount and wallet address.");
    } else {
      // Proceed with swapping logic
    }
  };
  const handleWalletAddressFocus = () => {
    if (walletAddress === "") {
      setWalletAddress(""); // Clearing the field when clicked if it's empty
    }
  };
  const handleAddSwap = () => {
    if (!sendAmount || !walletAddress) {
      alert("Please input the amount and wallet address.");
    } else {
      // Proceed with adding swap logic
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-8 text-left">Send, Swap & Bridge</h1>

      {/* Subheading */}
      <h2 className=" items-start text-md mt-4 text-left">
        Private, Compliant, No Sign Up
      </h2>

      {/* Toggle buttons */}
      <div className="flex justify-between items-center my-4 bg-customGray rounded-full h-14 w-auto p-4">
        <button
          className={`rounded-full py-2 px-4 mr-4  ${
            singleChecked
              ? "bg-white text-black font-bold"
              : "bg-customGray text-white"
          }`}
          onClick={() => {
            setSingleChecked(true);
            setShowPopup(false);
          }}
        >
          Single
        </button>
        <button
          className={`rounded-full py-2 px-4 ${
            !singleChecked
              ? "bg-white text-black font-bold"
              : "bg-customGray text-white"
          }`}
          onClick={() => {
            setSingleChecked(false);
            setShowPopup(false);
          }}
        >
          Multi send
        </button>
      </div>

      {/* Lower Fees button with popup */}
      {/* Lower Fees button */}
      <button
        className="rounded-2xl bg-white text-black font-semibold py-2 px-4 hover:bg-black hover:text-white hover:border-white border-2"
        onClick={handleLowerFeesButtonClick}
      >
        Lower Fees
      </button>

      {/* Lower Fees popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg">
          <div className="bg-customGray border-2 border-white text-white p-8 rounded-lg w-2/3 font-normal">
            <p className="mb-4 ">
              Magically lower swap fees by joining our Loyalty Program!
            </p>
            <p className="mb-4">
              Automatically enroll by staking your $POOF. The more you stake,
              the higher the rebate you&rsquo;ll receive on your swap fees.
            </p>
            <p className="mb-4">
              Once enrolled, you&rsquo;ll also be able to earn even more $POOF
              through the referral program. Simply share your Account ID or
              unique Referral Link with others and watch your rewards grow.
            </p>
            <p className="mb-4">Sign up now and start saving on your swaps!</p>
            {/* Close button */}
            <button
              className="bg-white text-black font-normal py-2 px-4 hover:bg-black hover:text-white hover:border-white border-2 rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Private/Semi-private toggle */}
      <div className="flex justify-center items-center my-4">
        <button
          className={`${
            privateOption === "Private" ? "font-bold" : "font-semibold"
          }`}
          onClick={() => {
            setPrivateOption("Private");
            setExactOption("Variable");
          }}
        >
          Private
        </button>
        <label
          htmlFor="check"
          className="bg-gray-300 cursor-pointer relative
          w-12 h-6 rounded-full mx-2"
        >
          <input type="checkbox" id="check" className="sr-only peer" />
          <span
            className="w-2/5 h-4/5 bg-white absolute rounded-full
left-1 top-1  peer-checked:left-6 transition-all peer-checked:bg-yellow-200 duration-500"
          ></span>
        </label>

        <button
          className={`${
            privateOption === "Semi-private" ? "font-bold" : "font-semibold"
          }`}
          onClick={() => {
            setPrivateOption("Semi-private");
            setExactOption("Exact");
          }}
        >
          Semi-private
        </button>
      </div>

      {/* Variable/Exact toggle */}
      <div className="flex justify-center items-center my-4">
        <button
          className={`${
            exactOption === "Variable" ? "font-normal" : "font-bold"
          }`}
          onClick={() => {
            setExactOption("Variable");
            setPrivateOption("Private");
          }}
        >
          Variable
        </button>
        <label
          htmlFor="checkbox"
          className="bg-gray-300 cursor-pointer relative w-12 h-6 rounded-full mx-2"
        >
          <input type="checkbox" id="checkbox" className="sr-only peer" />
          <span
            className={`w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:left-6 transition-all peer-checked:bg-yellow-200 duration-500 ${
              exactOption === "Exact" ? "left-6" : "left-1"
            }`}
          ></span>
        </label>
        <button
          className={`${exactOption === "Exact" ? "font-bold" : "font-normal"}`}
          onClick={() => {
            setExactOption("Exact");
            setPrivateOption("Semi-private");
          }}
        >
          Exact
        </button>
      </div>

      {/* Send and Receive inputs */}
      <div className="flex justify-center items-center bg-customGray h-32 w-5/6 px-6 rounded-xl ">
        <label htmlFor="sendAmount" className="mr-2 font-medium text-white">
          Send:
        </label>
        <input
          type="number"
          id="sendAmount"
          value={sendAmount}
          onChange={handleSendAmountChange}
          placeholder="send amount"
          className="mr-4 h-12 text-white  bg-customGray rounded-lg "
        />

        <span className="text-white">ETH(ERC-20) v</span>
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src={swap}
          alt=""
          className="h-9 w-9 z-10 bg-white rounded-md cursor-pointer transition duration-300 transform hover:rotate-180"
        />
      </div>
      <div className="flex justify-center items-center mb-4 bg-customGray h-32 w-5/6 px-6 rounded-xl">
        <label htmlFor="receiveAmount" className="ml-2 mr-2 text-white ">
          Receive:
        </label>
        <input
          type="number"
          id="receiveAmount"
          value={receiveAmount}
          onChange={handleReceiveAmountChange}
          placeholder="receive amount"
          className="text-white  bg-customGray mr-4 h-12 rounded-lg "
        />
        <span className="text-white">BTC v</span>
      </div>

      {/* Wallet Address input */}
      <div className="justify-center items-center mb-4 bg-customGray h-32 w-5/6 px-6 rounded-xl  mt-4 pt-3">
        <label
          htmlFor="walletAddress"
          className="block text-white mb-2"
          style={{ fontSize: "1rem" }}
        >
          Receiving Wallet (BTC) Address:
        </label>
        <div className="relative">
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={handleWalletAddressChange}
            onFocus={handleWalletAddressFocus}
            placeholder="Enter Wallet Address"
            className="text-white  bg-customGray pl-2 pr-8 h-12 w-full rounded-lg"
            style={{ fontSize: "1.30rem" }}
          />
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setWalletAddress("")}
          >
            &#x2715;
          </span>
        </div>
      </div>

      {/* Dotted Line */}
      <hr className="w-5/6 border border-dotted border-white my-4" />

      {/* Save Order and Add Swap buttons */}
      {!singleChecked && (
        <div className="flex justify-between items-center mb-4 px-6">
          <button
            className="bg-white text-black font-semibold py-2 px-4 hover:bg-black hover:text-white hover:border-white border-2 rounded-full mr-4"
            onClick={handleSubmit}
          >
            Save Order
          </button>
          {/* Add Swap button */}
          <button
            className=" bg-white text-black font-semibold py-2 px-4 rounded-full flex items-center"
            onClick={handleAddSwap}
          >
            Add Swap
            <Image
              src={plus}
              alt="Add Swap"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>
      )}

      <div className="flex justify-center items-center my-6 h-10 ">
        <span className="mr-2 text-white">Account ID:</span>
        <input
          type="text"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          onFocus={handleAccountIdFocus}
          placeholder="Enter your Account ID"
          className="text-left h-20 w-96 text-white bg-customGray rounded-lg px-2"
        />
      </div>

      {/* Note */}
      <p className="text-yellow-500 my-4">
        *Only Send To/From Wallets. Transactions sent To/From Smart Contracts
        are not accepted.
      </p>

      {/* Swap Now button */}
      <div className="flex justify-center items-center mb-4 p-5 ">
        <button
          type="submit"
          className="bg-white text-black font-bold rounded-full py-2 px-6 hover:bg-black hover:text-white hover:border-white border-2 transition duration-300 w-96 h-20"
          onClick={handleSubmit}
        >
          Swap Now
        </button>
      </div>
    </div>
  );
}
