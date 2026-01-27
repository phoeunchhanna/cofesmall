// Siem Reap City Center roughly
const SIEM_REAP_CENTER = {
  lat: 13.3633,
  lng: 103.8564,
};

// Banteay Meanchey (Sisophon) Center roughly
const BANTEAY_MEANCHEY_CENTER = {
  lat: 13.5859,
  lng: 102.9737,
};

// Radius in kilometers to be considered an allowed area
const ALLOWED_RADIUS_KM = 60;

function toRad(value: number) {
  return (value * Math.PI) / 180;
}

// Haversine formula to calculate distance between two points on Earth
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export function isLocationAllowed(userLat: number, userLng: number): boolean {
  const distanceToSR = calculateDistanceKm(userLat, userLng, SIEM_REAP_CENTER.lat, SIEM_REAP_CENTER.lng);
  const distanceToBM = calculateDistanceKm(userLat, userLng, BANTEAY_MEANCHEY_CENTER.lat, BANTEAY_MEANCHEY_CENTER.lng);
  
  // console.log(`Distance to SR: ${distanceToSR}, BM: ${distanceToBM}`);
  
  return distanceToSR <= ALLOWED_RADIUS_KM || distanceToBM <= ALLOWED_RADIUS_KM;
}

// Keep generic alias for backward compatibility if needed, but we'll refactor
export const isUserInSiemReap = isLocationAllowed;

