import React from 'react';
import SpotifyWidget from '../components/specific/SpotifyWidget';
import AppleMusicWidget from '../components/specific/AppleMusicWidget';
import InstagramWidget from '../components/specific/InstagramWidget';

const SocialAnalyticsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">Social Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SpotifyWidget />
        <AppleMusicWidget />
        <InstagramWidget />
      </div>
    </div>
  );
};

export default SocialAnalyticsPage;