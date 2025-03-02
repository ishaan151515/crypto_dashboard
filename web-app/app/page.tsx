
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useCryptoData } from "../hooks/useCryptoData";

// export default function Home() {
//   const { data, isLoading, isError, refetch } = useCryptoData();
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter the crypto data by coin name (case-insensitive)
//   const filteredData = data?.filter((coin: any) =>
//     coin.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Loading and error states
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         <h1 className="text-2xl">Loading...</h1>
//       </div>
//     );
//   }
//   if (isError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         <h1 className="text-2xl">Error fetching data</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-8">
//       {/* Header with updated title */}
//       <header className="mb-8">
//         <h1 className="text-4xl font-bold text-center">Crypto Tracker Dashboard</h1>
//       </header>

//       {/* Full-width Logo Banner */}
//       <div className="mx-auto w-full max-w-3xl">
//         {/* Place your logo image as 'public/logo.png' */}
//         <Image
//           src="/logo.png"
//           alt="Crypto Tracker Logo"
//           width={100}
//           height={100}
//           layout="responsive"
//           priority
//           className="rounded-md"
//         />
//       </div>

//       {/* Search Bar and Refresh Button */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search a coin..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
//         />
//         <button
//           onClick={() => refetch()}
//           className="px-4 py-2 bg-gray-700 rounded-r hover:bg-gray-600"
//         >
//           Refresh
//         </button>
//       </div>

//       {/* Improved Crypto Data Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-left border-collapse">
//           <thead className="bg-gray-800">
//             <tr>
//               <th className="py-3 px-4 border-b border-gray-700">#</th>
//               <th className="py-3 px-4 border-b border-gray-700">Coin</th>
//               <th className="py-3 px-4 border-b border-gray-700">Price (USD)</th>
//               <th className="py-3 px-4 border-b border-gray-700">Volume</th>
//               <th className="py-3 px-4 border-b border-gray-700">24h Change</th>
//               <th className="py-3 px-4 border-b border-gray-700">Market Cap</th>
//             </tr>
//           </thead>
//           <tbody className="bg-gray-900">
//             {filteredData?.map((coin: any, index: number) => (
//               <tr key={coin.id} className="hover:bg-gray-700 transition-colors">
//                 <td className="py-3 px-4 border-b border-gray-800">{index + 1}</td>
//                 <td className="py-3 px-4 border-b border-gray-800 flex items-center gap-2">
//                   <img
//                     src={coin.image}
//                     alt={coin.name}
//                     className="w-6 h-6"
//                   />
//                   <span className="ml-2">{coin.name}</span>
//                   <span className="text-gray-400 uppercase text-sm">
//                     ({coin.symbol})
//                   </span>
//                 </td>
//                 <td className="py-3 px-4 border-b border-gray-800">
//                   ${coin.current_price.toLocaleString()}
//                 </td>
//                 <td className="py-3 px-4 border-b border-gray-800">
//                   ${coin.total_volume.toLocaleString()}
//                 </td>
//                 <td
//                   className={`py-3 px-4 border-b border-gray-800 ${
//                     coin.price_change_percentage_24h > 0
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {coin.price_change_percentage_24h.toFixed(2)}%
//                 </td>
//                 <td className="py-3 px-4 border-b border-gray-800">
//                   ${coin.market_cap.toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { useCryptoData } from "../hooks/useCryptoData";

export default function Home() {
  const { data, isLoading, isError, refetch } = useCryptoData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter crypto data by coin name (case-insensitive)
  const filteredData = data?.filter((coin: any) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">Error fetching data</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow p-4 sm:p-8">
        {/* Full-width Logo Banner */}
        <div className="mb-8">
          <div className="mx-auto w-full max-w-3xl">
            <Image
              src="/logo.png"
              alt="Crypto Tracker Logo"
              width={1200}
              height={300}
              priority
              className="object-contain rounded-md"
            />
          </div>
        </div>

        {/* Search Bar and Refresh Button */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search a coin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-gray-700 rounded-r hover:bg-gray-600"
          >
            Refresh
          </button>
        </div>

        {/* Crypto Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-3 px-4 border-b border-gray-700">#</th>
                <th className="py-3 px-4 border-b border-gray-700">Coin</th>
                <th className="py-3 px-4 border-b border-gray-700">Price (USD)</th>
                <th className="py-3 px-4 border-b border-gray-700">Volume</th>
                <th className="py-3 px-4 border-b border-gray-700">24h Change</th>
                <th className="py-3 px-4 border-b border-gray-700">Market Cap</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              {filteredData?.map((coin: any, index: number) => (
                <tr key={coin.id} className="hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 border-b border-gray-800">{index + 1}</td>
                  <td className="py-3 px-4 border-b border-gray-800 flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <span>{coin.name}</span>
                    <span className="text-gray-400 uppercase text-sm">
                      ({coin.symbol})
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b border-gray-800">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-800">
                    ${coin.total_volume.toLocaleString()}
                  </td>
                  <td
                    className={`py-3 px-4 border-b border-gray-800 ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="py-3 px-4 border-b border-gray-800">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer at the Bottom */}
      <footer className="p-4 text-center">
        <p className="text-sm">Crypto Tracker Dashboard by ishaan chauhan</p>
      </footer>
    </div>
  );
}
