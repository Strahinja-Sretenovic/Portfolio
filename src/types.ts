export interface ProjectEstimatorBlueprint {
  projectTypeId: string;
  projectTitle: string;
  estimatedTime: string;
  selectedFeatures: string[];
  featureLabels: string[];
  formattedMessage: string;
  serviceCategory: string;
}
