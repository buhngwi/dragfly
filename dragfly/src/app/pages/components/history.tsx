import {DashboardLayout} from '../components/DashboardLayout';

const TransactionHistory = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left py-3 px-4">Transaction ID</th>
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Example of transaction rows */}
            <tr>
              <td className="py-3 px-4">0x1234567890abcdef</td>
              <td className="py-3 px-4">Swap</td>
              <td className="py-3 px-4">100 DAI</td>
              <td className="py-3 px-4">12/12/2024</td>
            </tr>
            {/* Add more rows */}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

