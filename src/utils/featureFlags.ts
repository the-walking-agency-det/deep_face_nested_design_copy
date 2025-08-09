interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
  enableCleanEdit: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
  enableCleanEdit: true,
};

export default featureFlags;
