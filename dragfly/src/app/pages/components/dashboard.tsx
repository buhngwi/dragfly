import DashboardLayout from './DashboardLayout';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    // Call API to fetch wallet balances or token data
    const fetchBalance = async () => {
      // Example of fetching data from a DeFi API
      const balance = await fetch('https://api.example.com/wallet/balance');
      setWalletBalance(await balance.json());
    };

    fetchBalance();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Your Portfolio</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {walletBalance ? (
          <div>
            <p className="text-lg">Wallet Balance: {walletBalance.total} USD</p>
            {/* Render token holdings */}
            <ul>
              {walletBalance.tokens.map((token) => (
                <li key={token.id} className="py-2">
                  <p>{token.name}: {token.amount} ({token.usdValue} USD)</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading your portfolio...</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;
