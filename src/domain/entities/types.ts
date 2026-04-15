// Domain models representing the core business logic

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AwardDetails {
  title: string;
  organization: string;
  description: string;
  year: number;
}

export interface AppDetails {
  name: string;
  version: string;
  lastUpdated: string;
  windowsDownloadUrl: string; // Updated for Windows
}