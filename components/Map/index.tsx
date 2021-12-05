import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Marker from "./marker"

interface MapProps {
  markers3D?: Markers3D;
}

interface WrappedMapProps extends MapProps {
  apiKey: string;
  markers2D?: Markers2D;
}

function onMarkerClick(place_id: string) {
  return (event: MouseEvent) => {
    console.log(`marker of place ${place_id} was clicked`);
  };
}


const Map = (props: React.PropsWithChildren<MapProps>) => {
  const { markers3D = [], children } = props;
  // console.table(markers3D);

  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          // center: new google.maps.LatLng(-34.397, 150.644),
          // center: new google.maps.LatLng(55.751244, 37.618423),
          center: new google.maps.LatLng(0, 0),
          zoom: 1,
          // minZoom: 1,
          // draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true,
          mapTypeControl: false,
          streetViewControl: false,
          gestureHandling: "cooperative",
        }),
      );
    }
  }, [ref, map]);



  return (<div id="map" ref={ref} className="w-full h-full">
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // set the map prop on the child component
        return React.cloneElement(child, { map });
      }
    })}

  </div>)
};

const render = (status: Status) => {
  return <span>{status}</span>;
};

const WrappedMap = (props: WrappedMapProps) => {
  const { apiKey, markers2D = [], markers3D = [] } = props;

  console.table(markers2D);

  return (
    <div className="w-full" style={{ height: "90vh" }}>
      <Wrapper apiKey={apiKey} render={render}>
        <Map markers3D={markers3D}>
          {markers2D.map(marker2D => {
            <Marker />
          })}
        </Map>
      </Wrapper>
    </div>
  );
};

export default WrappedMap;
