interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
  enableGating: boolean;
  enableWatermark: boolean;
  enableAutoScan: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
  enableGating: true,
  enableWatermark: true,
  enableAutoScan: true,
};

export default featureFlags;
