import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Loader} from '@googlemaps/js-api-loader';

type MapProps = {
  apiKey: string;
  markers2D?: Markers2D;
  markers3D?: Markers3D;
};

function onMarkerClick(place_id: string) {
  return (event: MouseEvent) => {
    console.log(`marker of place ${place_id} was clicked`);
  };
}

const Marker: React.Component<google.maps.MarkerOptions> = (options: any) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const Map = (props: MapProps) => {
  const { apiKey, markers2D = [], markers3D = [] } = props;
  // console.table(markers2D);
  // console.table(markers3D);

  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      new Loader({
        apiKey: apiKey,
        // version: 'weekly',
      }).load().then(() => {
        setMap(
          new google.maps.Map(ref.current!, {})
        )
      });
    }
  }, [ref, map]);

  return <div ref={ref} style={{width: "100%", height: "300px"}} />
};

export default Map
