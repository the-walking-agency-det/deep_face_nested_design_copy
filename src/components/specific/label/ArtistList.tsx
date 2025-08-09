import React, { useEffect, useState } from 'react';
import { useLabelStore } from '../../../store/labelStore';
import { listArtists } from '../../../utils/backend';

interface Artist {
  id: string;
  name: string;
}

const ArtistList: React.FC = () => {
  const selectArtist = useLabelStore((state) => state.selectArtist);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      const fetchedArtists = await listArtists();
      setArtists(fetchedArtists);
      setLoading(false);
    };
    fetchArtists();
  }, []);

  if (loading) {
    return <div>Loading artists...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select an Artist</h2>
      <ul className="space-y-2">
        {artists.map((artist) => (
          <li key={artist.id}>
            <button
              onClick={() => selectArtist(artist.id)}
              className="w-full text-left p-2 rounded-md hover:bg-light-surface dark:hover:bg-dark-surface"
            >
              {artist.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
