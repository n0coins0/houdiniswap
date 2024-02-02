// // --------------bard-----------
// // import axios from "axios";

// // const API_URL = "https://api.xblock.tech";
// // const API_KEY = "";
// // const API_SECRET = "";

// // const client = axios.create({
// //   baseURL: API_URL,
// //   headers: {
// //     accept: "application/json",
// //     Authorization: `${API_KEY}:${API_SECRET}`,
// //   },
// // });

// // export const fetchTokens = async () => {
// //   try {
// //     const response = await client.get("/tokens");
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching tokens:", error);
// //     throw error;
// //   }
// // };

// // export const fetchQuote = async (
// //   amount,
// //   from,
// //   to,
// //   anonymous,
// //   fixed,
// //   direction
// // ) => {
// //   try {
// //     const response = await client.get("/quote", {
// //       params: {
// //         amount,
// //         from,
// //         to,
// //         anonymous,
// //         fixed,
// //         direction,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching quote:", error);
// //     throw error;
// //   }
// // };

// // export const exchange = async (data) => {
// //   try {
// //     const response = await client.post("/exchange", data);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error initiating exchange:", error);
// //     throw error;
// //   }
// // };

// // export const getStatus = async (houdiniId) => {
// //   try {
// //     const response = await client.get(`/status/${houdiniId}`);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching status:", error);
// //     throw error;
// //   }
// // };

// // Create a file for your API functions, e.g., api.js

// // ---------------------chatgpt-------------

import axios from "axios";

const API_BASE_URL = "https://api.xblock.tech";
const API_KEY = "";

async function fetchTokens() {
  try {
    const response = await axios.get(`${API_BASE_URL}/tokens`, {
      headers: {
        Accept: "application/json",
        Authorization: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching tokens: " + error.message);
  }
}

async function fetchQuote(amount, from, to) {
  try {
    const queryParams = new URLSearchParams({
      amount: amount,
      from: from,
      to: to,
      anonymous: false,
      fixed: false,
      direction: "from",
    }).toString();

    const response = await axios.get(`${API_BASE_URL}/quote?${queryParams}`, {
      headers: {
        Accept: "application/json",
        Authorization: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching quote: " + error.message);
  }
}

async function performExchange(data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/exchange`, data, {
      headers: {
        Accept: "application/json",
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error performing exchange: " + error.message);
  }
}

export { fetchTokens, fetchQuote, performExchange };

///////////////page.js////////////////////
// import {
//     fetchTokens,
//     fetchQuote,
//     performExchange,
//   } from "../components/ApiClient";
//   import SwapComponent from "./swap/swap";
// const [tokens, setTokens] = useState([]);
// useEffect(() => {
//   // Fetch tokens when component mounts
//   async function fetchData() {
//     try {
//       const fetchedTokens = await fetchTokens();
//       setTokens(fetchedTokens);
//     } catch (error) {
//       console.error("Error fetching tokens:", error);
//       // Handle errors
//     }
//   }

//   fetchData();
// }, []);

// // Define state variables and functions for quote and exchange

// const handleFetchQuote = async () => {
//   try {
//     // Call fetchQuote function with appropriate parameters
//     const quoteData = await fetchQuote(
//       amount,
//       from,
//       to,
//       anonymous,
//       fixed,
//       direction
//     );
//     // Handle quote data
//   } catch (error) {
//     console.error("Error fetching quote:", error);
//     // Handle errors
//   }
// };

// const handlePerformExchange = async () => {
//   try {
//     // Call performExchange function with appropriate parameters
//     const exchangeData = await performExchange(data);
//     // Handle exchange data
//   } catch (error) {
//     console.error("Error performing exchange:", error);
//     // Handle errors
//   }
// };
//  <SwapComponent />
