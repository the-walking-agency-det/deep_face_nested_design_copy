interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
  enableGating: boolean;
  enableWatermark: boolean;
  enableAutoScan: boolean;
  enableGenArt: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
  enableGating: true,
  enableWatermark: true,
  enableAutoScan: true,
  enableGenArt: true,
};

export default featureFlags;
