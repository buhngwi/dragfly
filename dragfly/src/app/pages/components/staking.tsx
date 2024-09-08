import DashboardLayout from '../components/DashboardLayout';
import { useState, useEffect } from 'react';

const Staking = () => {
  const [stakingData, setStakingData] = useState(null);

  useEffect(() => {
    // Fetch staking pools and rewards from the API
    const fetchStakingData = async () => {
      const data = await fetch('https://api.example.com/staking');
      setStakingData(await data.json());
    };

    fetchStakingData();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Staking</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {stakingData ? (
          <div>
            {/* Display available staking pools */}
            <ul>
              {stakingData.pools.map((pool) => (
                <li key={pool.id} className="mb-4">
                  <h2 className="text-lg font-bold">{pool.name}</h2>
                  <p>APR: {pool.apr}%</p>
                  <p>Staked: {pool.stakedAmount} tokens</p>
                  {/* Button to stake or unstake */}
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                    {pool.userStaked ? 'Unstake' : 'Stake'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading staking pools...</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Staking;
