interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
  enableGating: boolean;
  enableWatermark: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
  enableGating: true,
  enableWatermark: true,
};

export default featureFlags;
