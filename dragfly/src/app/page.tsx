// page.jsx
"use client";
import bgImage from './images/genai_28.jpeg'; // Ensure this path is correct
import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation'; // For redirection
import { useStargazerWallet } from '@stardust-collective/web3-react-stargazer-connector';

const WalletConnector = () => {
  // Set account state to either a string (the wallet address) or null
  const [account, setAccount] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const stargazerWalletState = useStargazerWallet();
  const { activate, deactivate, active } = stargazerWalletState;
  const router = useRouter(); // Initialize router for navigation

  // Function to handle wallet activation and redirect
  const connectWallet = async () => {
    try {
      setErrorMessage(null); // Reset error message
      await activate();

      // Ensure that wallet is connected and account is available
      if (stargazerWalletState.active && 'account' in stargazerWalletState) {
        setAccount(stargazerWalletState.account); // Set the account when connected
        // Redirect to dashboard on successful connection
        router.push('/dashboard');
      }
    } catch (error) {
      setErrorMessage('Error connecting to wallet. Please try again.');
      console.error('Error connecting to wallet:', error);
    }
  };

  // Function to handle wallet deactivation
  const disconnectWallet = async () => {
    try {
      await deactivate();
      setAccount(null); // Reset account state to null
    } catch (error) {
      setErrorMessage('Error disconnecting from wallet.');
      console.error('Error disconnecting from wallet:', error);
    }
  };

  useEffect(() => {
    if (stargazerWalletState.active && 'account' in stargazerWalletState) {
      setAccount(stargazerWalletState.account); // Set the account when the wallet is active
    }
  }, [stargazerWalletState]);

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="text-center bg-blue bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Connect to Stargazer Wallet</h1>

        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}

        {account ? (
          <>
            <p className="mb-4">Connected Account: {account}</p>
            <button
              onClick={disconnectWallet}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Disconnect Wallet
            </button>
          </>
        ) : (
          <button
            onClick={connectWallet}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletConnector;