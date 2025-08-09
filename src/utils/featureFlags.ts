interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
  enableGating: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
  enableGating: true,
};

export default featureFlags;
