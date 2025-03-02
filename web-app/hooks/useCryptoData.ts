"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch crypto data from CoinGecko
const fetchCryptoData = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 5, // Fetching 5 cryptocurrencies as per assignment
        page: 1,
        sparkline: false,
      },
    }
  );
  return response.data;
};

// Custom hook using React Query to fetch and cache crypto data
export function useCryptoData() {
  return useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
    staleTime: 30000, // Data is fresh for 30 seconds
  });
}
