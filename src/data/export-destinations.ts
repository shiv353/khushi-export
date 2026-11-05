export type ExportDestination = {
  country: string;
  city: string;
  lat: number;
  lng: number;
};

// Illustrative only. Confirm actual export markets before presenting these as current destinations.
export const exportOrigin: ExportDestination = {
  country: "India",
  city: "Unjha",
  lat: 23.8,
  lng: 72.4,
};

// Coordinates identify a representative city in each illustrative destination.
export const exportDestinations: ExportDestination[] = [
  { country: "United States", city: "New York", lat: 40.7128, lng: -74.006 },
  { country: "United Kingdom", city: "London", lat: 51.5074, lng: -0.1278 },
  { country: "Germany", city: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  { country: "United Arab Emirates", city: "Dubai", lat: 25.2048, lng: 55.2708 },
  { country: "Singapore", city: "Singapore", lat: 1.3521, lng: 103.8198 },
  { country: "Japan", city: "Tokyo", lat: 35.6762, lng: 139.6503 },
];
