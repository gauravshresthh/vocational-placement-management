"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Typography } from "../ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";

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

const MapWithLocations = ({ locations }: { locations: LocationProps[] }) => {
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Reinitialize the map when locations change
    setMapKey((prevKey) => prevKey + 1);
  }, [locations]);

  return (
    <MapContainer
      key={mapKey}
      center={[locations[0].lat, locations[0].lng]} // Center on the first location
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "350px", width: "100%" }}
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
            <div className="flex flex-row gap-2 justify-between items-center">
              <Avatar className="h-12 w-12 rounded-none">
                <AvatarImage
                  className="rounded-none"
                  src={location.icon || ""}
                />
                <AvatarFallback className="rounded-none">QF</AvatarFallback>
              </Avatar>
              <div>
                <Typography variant={"p3"} className="font-bold mb-2">
                  {location.name}
                </Typography>

                <Typography variant={"p6"} className="underline">
                  {location.address}
                </Typography>
              </div>
              <div className="border-l px-2">
                <Typography variant={"p4"} className="font-bold m-1">
                  {location.placement}
                </Typography>
                <Typography variant={"p6"} className="m-1">
                  Placement
                </Typography>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithLocations;
