import React from "react";
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Tooltip
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { dataCenterLocations } from "../constant/data";

const DataCenterMap: React.FC = () => {
    return (
        <MapContainer
            center={[-15.0, -60.0]}
            zoom={4}
            style={{ height: "50vh", width: "100%", }}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {dataCenterLocations.map((dc, index) => (
                <CircleMarker
                    key={index}
                    center={dc.coords as [number, number]}
                    radius={8} // Fixed radius
                    pathOptions={{
                        color: "lime",
                        fillColor: "lime",
                        fillOpacity: 0.6,
                    }}
                >
                    <Tooltip>
                        {/* {`${dc.name} (${dc.powerMW ?? "N/A"} MW)`} */}
                        <p className="font-bold text-xs">
                            {dc.name.split(",")[0]}
                        </p>
                        <p className="">
                            Location: {dc.name}
                        </p>
                        <p className="">
                            Capacity: {`${dc.powerMW ?? "N/A"} MW`}
                        </p>
                    </Tooltip>
                </CircleMarker>
            ))}
        </MapContainer>
    );
};

export default DataCenterMap;
