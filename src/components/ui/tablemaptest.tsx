"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { useCallback, useEffect, useState } from "react";
import { useDisclosure } from "@/hooks/useDisclosure";
import LocationCard from "./locationcard";
import { LocationDrawer } from "./LocationDrawer";

interface LocationProps {
  icon?: string;
  lat: number;
  lng: number;
  name: string;
  address: string;
  placement: number;
}

const icon = L.icon({
  iconSize: [50, 50],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "/image/icon/education-location-01.png",
  shadowUrl: "/image/icon/location-shadow-01.png",
});

const TableMapTest = ({
  locations,
  locationChildren,
}: {
  locations: LocationProps[];
  locationChildren: React.ReactNode;
}) => {
  const [mapKey, setMapKey] = useState(0);
  const viewState = useDisclosure();

  const handleViewClick = useCallback(() => {
    viewState.onOpen();
  }, [viewState]);
  useEffect(() => {
    // Reinitialize the map when locations change
    setMapKey((prevKey) => prevKey + 1);
  }, [locations]);

  return (
    <>
      <MapContainer
        key={mapKey}
        center={[locations[0].lat, locations[0].lng]} // Center on the first location
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((location, index) => (
          <Marker
            key={`${location.lat}${location.lng}-${index}`}
            position={[location.lat, location.lng]}
            icon={icon}
          >
            <Popup>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewClick();
                }}
                className="text-left w-full"
              >
                <LocationCard location={location} />
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <LocationDrawer
        isOpen={viewState.isOpen}
        onToggle={viewState.onToggle}
        onClose={viewState.onClose}
        locationChildren={locationChildren}
      />
    </>
  );
};

export default TableMapTest;
