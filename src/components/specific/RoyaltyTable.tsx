import React from 'react';

interface RoyaltyData {
  id: string;
  source: string;
  territory: string;
  release: string;
  amount: number;
}

const data: RoyaltyData[] = [
  { id: '1', source: 'Spotify', territory: 'USA', release: 'Single A', amount: 123.45 },
  { id: '2', source: 'Apple Music', territory: 'UK', release: 'Single A', amount: 67.89 },
  { id: '3', source: 'Spotify', territory: 'Germany', release: 'EP B', amount: 234.56 },
];

const RoyaltyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-light-surface dark:bg-dark-surface">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Source</th>
            <th className="py-2 px-4 border-b">Territory</th>
            <th className="py-2 px-4 border-b">Release</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-b">{row.source}</td>
              <td className="py-2 px-4 border-b">{row.territory}</td>
              <td className="py-2 px-4 border-b">{row.release}</td>
              <td className="py-2 px-4 border-b">${row.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoyaltyTable;