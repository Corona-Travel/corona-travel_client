import { Component, MouseEvent } from "react";
import GoogleMapReact from "google-map-react";

import { Marker } from "components";

type MapProps = {
  APIkey: string;
  zoom?: number;
  center?: Position;
  markers?: Markers;
};

function onMarkerClick(place_id: string) {
  return (event: MouseEvent) => {
    console.log(`marker of place ${place_id} was clicked`);
  };
}

const Map2D = (props: MapProps) => {
  const { APIkey, zoom = 0, center = { lng: 0, lat: 0 }, markers = [] } = props;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: APIkey,
      }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {markers.map((marker: Marker) => (
        <Marker
          // rendering stuff
          key={marker.place_id}
          // position
          {...marker.pos}
          name={marker.name}
          onClick={onMarkerClick(marker.place_id)}
        />
      ))}
    </GoogleMapReact>
  );
};

export default Map2D;
