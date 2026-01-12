import React, { useEffect, useState } from "react";
import Map from "./Map";
import AppHeader from "../AppHeader";
import './Map.css';

export default function MapContainer() {
  const [position, setPosition] = useState([37.7749, -122.4194]);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    // Request location services to access user's current location

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        setLocationError("Location permission denied");
        console.error(err);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="map-container">
      <h3>Map View</h3>
      {locationError && <p>{locationError}</p>}

      <Map position={position} />
    </div>
  );
}