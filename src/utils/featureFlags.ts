interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
};

export default featureFlags;
