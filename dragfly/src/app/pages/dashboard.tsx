import { useState } from 'react';
import { useRouter } from 'next/router';
import { WalletConnector } from './WalletConnector'; // Assuming you have a wallet connector component

const dashboard = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-64 ${isSidebarOpen ? 'block' : 'hidden'} md:block bg-blue-900`}>
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold mb-6">DragFly Dashboard</h2>
          <ul>
            <li className="mb-4">
              <a href="/dashboard" className="block py-2 px-4 text-white hover:bg-blue-700">Portfolio</a>
            </li>
            <li className="mb-4">
              <a href="/staking" className="block py-2 px-4 text-white hover:bg-blue-700">Staking</a>
            </li>
            <li className="mb-4">
              <a href="/farming" className="block py-2 px-4 text-white hover:bg-blue-700">Yield Farming</a>
            </li>
            <li className="mb-4">
              <a href="/history" className="block py-2 px-4 text-white hover:bg-blue-700">Transaction History</a>
            </li>
            <li className="mb-4">
              <a href="/analytics" className="block py-2 px-4 text-white hover:bg-blue-700">Analytics</a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="p-4 bg-white shadow-md">
          <div className="flex justify-between items-center">
            <button
              className="md:hidden text-blue-500"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              Menu
            </button>
            <WalletConnector />
          </div>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default dashboard;