import React from 'react';
import useAudioArtStore from '../store/audioArtStore';
import { trackEvent } from '../utils/analytics';
import featureFlags from '../utils/featureFlags';
import { analyzeFeatures, generateArt } from '../utils/backend';

const AudioPlayer: React.FC = () => {
  return (
    <div>
      <h3 className="text-h3 font-bold mb-4">Audio Player</h3>
      <p>Audio player and feature analysis will go here.</p>
    </div>
  );
};

const Canvas: React.FC = () => {
  return (
    <div>
      <h3 className="text-h3 font-bold mb-4">Generative Art Canvas</h3>
      <p>Canvas for live visualization will go here.</p>
    </div>
  );
};

const Tweak: React.FC = () => {
    return (
        <div>
        <h3 className="text-h3 font-bold mb-4">Tweak</h3>
        <p>Tweak controls will go here.</p>
        </div>
    );
};

const Export: React.FC = () => {
    return (
        <div>
        <h3 className="text-h3 font-bold mb-4">Export</h3>
        <p>Export options will go here.</p>
        </div>
    );
};

const SaveSeed: React.FC = () => {
    return (
        <div>
        <h3 className="text-h3 font-bold mb-4">Save Seed</h3>
        <p>Save seed functionality will go here.</p>
        </div>
    );
};

const AudioArtPage: React.FC = () => {
  const { state, setState } = useAudioArtStore();

  if (!featureFlags.enableGenArt) {
    return (
      <div>
        <h1 className="text-h1 font-bold mb-4">Audio-Driven Generative Artwork</h1>
        <p>This feature is currently disabled.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">Audio-Driven Generative Artwork</h1>

      {state === 'AnalyzeAudio' && (
        <div>
            <AudioPlayer />
            <Canvas />
        </div>
      )}
      {state === 'GenerateVariants' && (
        <div>
            <Canvas />
        </div>
      )}
      {state === 'Tweak' && (
        <div>
            <Canvas />
            <Tweak />
        </div>
      )}
      {state === 'Export' && (
        <div>
            <Canvas />
            <Export />
        </div>
      )}
      {state === 'SaveSeed' && (
        <div>
            <Canvas />
            <SaveSeed />
        </div>
      )}

    </div>
  );
};

export default AudioArtPage;
