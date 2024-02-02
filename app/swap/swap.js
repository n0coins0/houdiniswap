// import { useState, useEffect } from "react";
// import {
//   fetchTokens,
//   fetchQuote,
//   exchange,
//   getStatus,
// } from "../components/ApiClient";
// // ... other imports

// function SwapPage() {
//   const [tokens, setTokens] = useState([]);
//   const [quote, setQuote] = useState(null);
//   const [houdiniId, setHoudiniId] = useState(null);
//   const [status, setStatus] = useState(null);
//   // ... other state variables

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedTokens = await fetchTokens();
//         setTokens(fetchedTokens);
//       } catch (error) {
//         // Handle errors
//       }
//     };

//     fetchData();
//   }, []);

//   const handleGetQuote = async () => {
//     try {
//       const quoteData = await fetchQuote(
//         amount,
//         from,
//         to,
//         anonymous,
//         fixed,
//         direction
//       );
//       setQuote(quoteData);
//     } catch (error) {
//       // Handle quote fetching errors
//     }
//   };

//   const handleSwap = async () => {
//     try {
//       const exchangeData = await exchange({
//         // ... exchange data
//       });
//       setHoudiniId(exchangeData.houdiniId);
//       setStatus("Pending");
//     } catch (error) {
//       // Handle exchange errors
//     }
//   };

//   const handleCheckStatus = async () => {
//     try {
//       const statusData = await getStatus(houdiniId);
//       setStatus(statusData.status);
//     } catch (error) {
//       // Handle status fetching errors
//     }
//   };

//   // ... other functions and UI elements

//   return (
//     <div>
//       {/* Use tokens, quote, houdiniId, status to populate UI elements */}
//       {/* ... */}
//     </div>
//   );
// }

// chatgpt

import React, { useState, useEffect } from "react";
import {
  fetchTokens,
  fetchQuote,
  performExchange,
} from "../../components/ApiClient";

export default function MyComponent() {
  const [tokens, setTokens] = useState([]);
  const [quote, setQuote] = useState(null);
  const [exchangeResult, setExchangeResult] = useState(null);
  const [error, setError] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("BNB");
  const [address, setAddress] = useState(
    "0x000000000000000000000000000000000000dead"
  );

  useEffect(() => {
    // Fetch tokens when component mounts
    async function fetchData() {
      try {
        const tokensData = await fetchTokens();
        setTokens(tokensData);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const handleFetchQuote = async () => {
    try {
      const quoteData = await fetchQuote(1, fromCurrency, toCurrency);
      setQuote(quoteData);
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePerformExchange = async () => {
    try {
      const exchangeData = await performExchange({
        amount: 1,
        from: fromCurrency,
        to: toCurrency,
        receiverTag: "",
        addressTo: address,
        anonymous: false,
        fixed: false,
        direction: "from",
        ip: "0.0.0.0",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        timezone: "UTC",
      });
      setExchangeResult(exchangeData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Tokens:</h2>
      <ul>
        {tokens.map((token) => (
          <li key={token.id}>{token.name}</li>
        ))}
      </ul>

      <div>
        <label htmlFor="fromCurrency">From Currency:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {tokens.map((token) => (
            <option key={token.id} value={token.symbol}>
              {token.name} ({token.symbol})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="toCurrency">To Currency:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {tokens.map((token) => (
            <option key={token.id} value={token.symbol}>
              {token.name} ({token.symbol})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <button onClick={handleFetchQuote}>Fetch Quote</button>
      {quote && (
        <div>
          <h2>Quote:</h2>
          <p>From: {quote.from}</p>
          <p>To: {quote.to}</p>
          <p>Amount: {quote.amount}</p>
          <p>Price: {quote.price}</p>
        </div>
      )}

      <button onClick={handlePerformExchange}>Perform Exchange</button>
      {exchangeResult && (
        <div>
          <h2>Exchange Result:</h2>
          <p>Transaction ID: {exchangeResult.transactionId}</p>
          <p>Status: {exchangeResult.status}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}
