import React, { Suspense, lazy, useEffect, useState } from "react";
import { getUserLocation } from "../utils/data";
import AppHeader from "../AppHeader";
import './Map.css';
const Map = lazy(() => import('./Map'));

export default function MapContainer() {
  const [position, setPosition] = useState([37.7749, -122.4194]);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    getUserLocation().then(({ position: pos, error }) => {
      if (error) {
        setLocationError(error);
      } else if (pos) {
        setPosition(pos);
      }
    });
    // Request location services to access user's current location

  }, []);

  return (
    <div className="map-container">
      <h3>Map View</h3>
      {locationError && <p>{locationError}</p>}
      <Suspense fallback={<div>Loading map...</div>}>
        <Map position={position} />
      </Suspense>
    </div>
  );
}