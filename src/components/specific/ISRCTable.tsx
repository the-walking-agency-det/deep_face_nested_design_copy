import React from 'react';
import useIsrcStore from '../../store/isrcStore';

const ISRCTable: React.FC = () => {
  const { tracks, updateTrackIsrc } = useIsrcStore();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-light-surface dark:bg-dark-surface">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Artist</th>
            <th className="py-2 px-4 border-b">ISRC</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td className="py-2 px-4 border-b">{track.title}</td>
              <td className="py-2 px-4 border-b">{track.artist}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={track.isrc}
                  onChange={(e) => updateTrackIsrc(track.id, e.target.value)}
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ISRCTable;
