interface FeatureFlags {
  enableGenerate: boolean;
  enableValidate: boolean;
  enableHeatmap: boolean;
}

const featureFlags: FeatureFlags = {
  enableGenerate: true,
  enableValidate: true,
  enableHeatmap: true,
};

export default featureFlags;
